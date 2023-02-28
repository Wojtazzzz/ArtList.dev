import { truncateString } from '@/utils/truncate';
import type { Server as ServerType } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

type ServerProps = Pick<
	ServerType,
	'id' | 'icon' | 'ip' | 'motd' | 'online' | 'slots' | 'tags' | 'version'
>;

export const Server = ({ id, icon, ip, motd, online, slots, tags, version }: ServerProps) => {
	return (
		<Link href={`/serwer/${id}`}>
			<article className="flex w-full flex-col justify-between gap-y-4 rounded-xl bg-black/60 p-3 text-white shadow-md md:flex-row md:items-center md:p-4 lg:p-5">
				<header className="relative flex items-center justify-between gap-3 md:justify-start">
					<div className="absolute top-0 left-0 h-16 w-16 md:relative">
						<Image fill src={icon} className="rounded-md" alt="" />
					</div>

					<hgroup className="ml-[74px] text-sm md:ml-0 md:text-base">
						<h2 className="font-bold">{ip}</h2>
						<p className="flex flex-col">
							{motd.map((line, index) => (
								<span key={index} dangerouslySetInnerHTML={{ __html: line }}></span>
							))}
						</p>
					</hgroup>
				</header>

				<footer className="flex flex-col gap-1.5 text-right text-sm">
					<span title={version}>{truncateString(version, 32, '...')}</span>
					<span>
						{online}/{slots}
					</span>
					<ul role="list" className="flex justify-end gap-2">
						{tags.map((tag, index) => (
							<li
								key={index}
								className="rounded-3xl bg-primary px-2.5 py-1 text-xs font-medium"
							>
								{tag}
							</li>
						))}
					</ul>
				</footer>
			</article>
		</Link>
	);
};

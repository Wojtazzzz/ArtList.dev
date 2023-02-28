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
			<article className="flex w-full items-center justify-between rounded-xl bg-black/60 p-5 text-white shadow-md">
				<header className="flex items-center gap-3">
					<div className="relative h-16 w-16">
						<Image fill src={icon} className="rounded-md" alt="" />
					</div>

					<hgroup className="">
						<h2 className="font-bold">{ip}</h2>
						<p className="flex flex-col">
							{motd.map((line, index) => (
								<span key={index} dangerouslySetInnerHTML={{ __html: line }}></span>
							))}
						</p>
					</hgroup>
				</header>

				<footer className="flex flex-col gap-1.5 text-right text-sm">
					<span>{version}</span>
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

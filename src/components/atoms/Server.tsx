import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const tags = ['pvp', 'survival', 'anarchia', 'skyblock'] as const;

export const Server = () => {
	return (
		<Link href="/serwer/1">
			<article className="flex w-full items-center justify-between rounded-xl bg-black/60 p-5 text-white shadow-md">
				<header className="flex gap-3">
					<div>
						<Image
							width="64"
							height="64"
							src="/grass.webp"
							className="rounded-md"
							alt=""
						/>
					</div>

					<hgroup className="">
						<h2 className="font-bold">ArtMc.pl</h2>
						<p>Najlepszy serwer Minecraft pod słońcem!</p>
					</hgroup>
				</header>

				<footer className="flex flex-col gap-1.5 text-right text-sm">
					<span>1.19.2</span>
					<span>99999/99999</span>
					<ul role="list" className="flex gap-2">
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

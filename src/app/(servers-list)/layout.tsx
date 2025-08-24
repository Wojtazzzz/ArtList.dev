import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { Search } from '@/components/modules/servers/search/Search';
import { Container } from '@/components/ui/Container';
import { TypographyH2, TypographyH3 } from '@/components/ui/Typography';
import { Link } from '@/components/ui/Link';

type ServersListLayoutProps = {
	children: ReactNode;
};

export default function ServersListLayout({
	children,
}: ServersListLayoutProps) {
	return (
		<Container>
			<div className="flex items-center py-4">
				<Suspense>
					<Search />
				</Suspense>
			</div>

			<div className="py-8">{children}</div>

			<section className="mt-8 space-y-8">
				<TypographyH2>
					<span className="text-2xl">Dla ciekawskich</span>
				</TypographyH2>

				<article className="space-y-3">
					<TypographyH3>
						<span className="text-xl">
							Czym są serwery Minecraft i jak z nich korzystać?
						</span>
					</TypographyH3>
					<p>
						<b>Serwery Minecraft</b> to specjalne światy stworzone przez graczy
						lub społeczności, do których można dołączyć online. Dzięki nim
						rozgrywka staje się znacznie bogatsza – możesz grać w trybie
						survival, creative, roleplay czy PvP. Wystarczy skopiować adres IP
						wybranego serwera z{' '}
						<a href="https://artlist.dev/">listy serwerów na ArtList</a> i dodać
						go w grze. Jeśli dopiero zaczynasz, poradnik instalacji znajdziesz
						na{' '}
						<a
							href="https://help.minecraft.net/"
							target="_blank"
							rel="noreferrer"
							className="underline hover:text-gray-300"
						>
							centrum pomocy Minecraft
						</a>
						, a my pomożemy Ci odkryć nowe przygody i dołączyć do aktywnej
						społeczności.
					</p>
				</article>

				<article className="space-y-3">
					<TypographyH3>
						<span className="text-xl">
							ArtList – unikatowa lista serwerów Minecraft
						</span>
					</TypographyH3>
					<p>
						<strong>ArtList</strong> to miejsce stworzone dla graczy szukających
						idealnego serwera. Nasza <b>lista serwerów Minecraft</b> prezentuje
						najciekawsze projekty, od survivalu, przez skyblock, aż po tryby
						PvP. Dzięki aktualnym statystykom wiesz, gdzie gra najwięcej osób i
						który serwer cieszy się największą popularnością. Sprawdź ranking i
						znajdź swoje miejsce w{' '}
						<a
							href="https://www.minecraft.net/"
							target="_blank"
							rel="noreferrer"
							className="underline hover:text-gray-300"
						>
							cyfrowym świecie Minecrafta
						</a>
						.
					</p>
				</article>

				<article className="space-y-3">
					<TypographyH3>
						<span className="text-xl">
							Serwery Minecraft z historią aktywności graczy
						</span>
					</TypographyH3>
					<p>
						Na stronie{' '}
						<Link href="https://artlist.dev/">
							<span className="underline hover:text-gray-300">ArtList.dev</span>
						</Link>{' '}
						każdy serwer posiada własny profil, na którym możesz sprawdzić{' '}
						<b>historyczne dane o liczbie graczy</b>. To świetne rozwiązanie dla
						osób, które chcą dołączyć do aktywnej społeczności i uniknąć pustych
						światów. Więcej informacji o trybach i mechanice gry znajdziesz
						także na stronie{' '}
						<a
							href="https://minecraft.fandom.com/wiki/Minecraft_Wiki"
							target="_blank"
							rel="noreferrer"
							className="underline hover:text-gray-300"
						>
							Minecraft Wiki
						</a>
						, a u nas szybko wybierzesz <strong>serwer Minecraft</strong>, który
						pasuje do Twojego stylu.
					</p>
				</article>
			</section>
		</Container>
	);
}

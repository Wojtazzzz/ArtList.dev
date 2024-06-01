import type { ReactNode } from 'react';
import { Link } from '@/components/ui/Link';

type Rules = {
	header: string;
	paragraphs: ReactNode[];
}[];

export const rules = [
	{
		header: 'Regulamin Serwisu',
		paragraphs: [
			'Aplikacja ArtList.pl służy do dzielenia się adresami serwerów do gry Minecraft.',
			'Za treści niezwiązane z tematyką witryny uważane są wszelkie reklamy czy linki do innych stron o podobnej tematyce (listy serwerów/hostingi itd.) bez uprzedniej zgody administratora serwisu.',
			'Dodanie serwera do listy jest w pełni darmowe i nie wymaga rejestracji konta.',
			'W serwisie nie wolno umieszczać treści powszechnie uważanych za wulgarne, treści naruszających prawa autorskie oraz materiałów pornograficznych.',
			'Treści publikowane przez użytkowników mogą być moderowane. W przypadku naruszeń regulaminu mogą być również usunięte bez uprzedzenia.',
			'W przypadku naruszenia postanowień regulaminu dostęp do witryny może zostać zablokowany.',
			'Każdy użytkownik, również anonimowy może opublikować adres do serwera Minecraft.',
			<>
				Informacje na temat opublikowanych serwerów są pobierane cyklicznie z
				publicznie udostępnionego{' '}
				<Link href="https://mcsrvstat.us/" target="_blank" variant="external">
					<span className="underline dark:text-white">API</span>
				</Link>
			</>,
		],
	},
] satisfies Rules;

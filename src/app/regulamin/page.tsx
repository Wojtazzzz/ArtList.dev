import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';
import { TypographyH2, TypographyP } from '@/components/ui/Typography';
import type { ReactNode } from 'react';
import { Link } from '@/components/ui/Link';
import { getCanonical } from '@/utils/functions';

export const metadata: Metadata = {
	title: 'Regulamin serwisu - ArtList.dev',
	alternates: {
		canonical: getCanonical('/regulamin'),
	},
};

type Rules = {
	header: string;
	paragraphs: ReactNode[];
}[];

const rules = [
	{
		header: 'Regulamin Serwisu',
		paragraphs: [
			'Aplikacja ArtList.dev służy do dzielenia się adresami serwerów do gry Minecraft.',
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
] as const satisfies Rules;

export default async function StatutePage() {
	return (
		<Container>
			{rules.map((section, sectionIndex) => (
				<section className="prose mx-auto !min-w-full" key={sectionIndex}>
					<TypographyH2 id="statute-title">
						<span className="text-3xl font-bold">{section.header}</span>
					</TypographyH2>

					{/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
					<ol
						role="list"
						className="list-decimal dark:marker:text-gray-300"
						aria-labelledby="statute-title"
					>
						{section.paragraphs.map((paragraph, paragraphIndex) => (
							<li key={paragraphIndex}>
								<TypographyP>{paragraph}</TypographyP>
							</li>
						))}
					</ol>
				</section>
			))}
		</Container>
	);
}

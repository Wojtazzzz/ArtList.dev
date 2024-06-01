import type { Metadata } from 'next';
import '../styles/globals.css';
import { type ReactNode } from 'react';
import { Toaster } from '@/components/ui-library/toaster';
import { Providers } from '@/components/Providers';
import { Footer } from '@/components/Footer';
import { Inter } from 'next/font/google';
import { RootNavigation } from '@/components/navigations/root/RootNavigation';
import { ScrollToTop } from '@/components/scrollToTop/ScrollToTop';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'Lista serwerów Minecraft - ArtList.pl',
	description:
		'Odkryj świat serwerów Minecraft! Znajdź idealny serwer do gry lub zareklamuj własny.',
};

type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="pl"
			className={cn(inter.className, 'scroll-smooth')}
			suppressHydrationWarning
		>
			<body>
				<Providers>
					<RootNavigation />

					<main>{children}</main>

					<Footer />

					<ScrollToTop />
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}

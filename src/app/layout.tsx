import type { Metadata } from 'next';
import '../styles/globals.css';
import { type ReactNode } from 'react';
import { Toaster } from '@/components/ui-library/toaster';
import { Providers } from '@/components/Providers';
import { Footer } from '@/components/Footer';
import { Inter } from 'next/font/google';
import { RootNavigation } from '@/components/navigations/root/RootNavigation';
import { ScrollToTop } from '@/components/scrollToTop/ScrollToTop';
import { cn } from '@/utils/functions';
import Script from 'next/script';
import { GoogleAdsense } from '@/components/GoogleAdsense';

export const metadata: Metadata = {
	title: 'Lista serwerów Minecraft | ArtList.pl',
	description:
		'ArtList – aktualna lista serwerów Minecraft. Sprawdź popularne serwery Minecraft i dołącz do aktywnych społeczności graczy już dziś!',
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

				<GoogleAdsense />
			</body>
		</html>
	);
}

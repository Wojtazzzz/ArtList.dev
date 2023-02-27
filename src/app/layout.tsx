import type { ReactNode } from 'react';
import '../styles/tailwind.css';
import { Navigation } from '@/components/molecules/Navigation';
import { Open_Sans } from 'next/font/google';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

type RootLayoutProps = {
	children: ReactNode;
};

const opensans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-open_sans',
	display: 'swap',
});

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pl" className={`${opensans.variable}`}>
			<body className="bg-primary bg-cover bg-fixed bg-no-repeat">
				<Navigation />

				<main className="relative z-10"></main>
				{children}
			</body>
		</html>
	);
}

'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useIsNavItemActive } from './useIsNavItemActive';
import { clsx } from 'clsx';

type NavItemProps = {
	href: string;
	children: ReactNode;
};

export const NavItem = ({ href, children }: NavItemProps) => {
	const { isNavItemActive } = useIsNavItemActive();

	const isActive = isNavItemActive(href);

	return (
		<Link
			href={href}
			className={clsx(
				'text-xl font-medium transition-opacity',
				isActive ? 'text-white' : 'text-white/75 hover:text-white'
			)}
		>
			{children}
		</Link>
	);
};

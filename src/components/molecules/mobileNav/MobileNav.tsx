'use client';

import clsx from 'clsx';
import { useMobileNav } from './useMobileNav';
import { links } from '@/utils/links';
import { NavItem } from '@/components/atoms/navItem/NavItem';
import Image from 'next/image';
import CrossIcon from '../../icons/cross.svg';
import MenuIcon from '../../icons/menu.svg';

export const MobileNav = () => {
	const { isActive, open, close } = useMobileNav();

	return (
		<>
			<div
				className={clsx(
					isActive ? 'flex md:hidden' : 'hidden',
					'fixed top-0 left-0 z-40 h-screen w-screen items-center justify-center bg-primary/90'
				)}
			>
				<button type="button" onClick={close} className="absolute top-9 right-8">
					<span className="sr-only">Zamknij nawigację</span>
					<Image src={CrossIcon} width="32" height="32" alt="" />
				</button>

				<ul role="list" className="flex flex-col gap-5 text-center">
					{links.map(({ name, href }, index) => (
						<li key={index} onClick={close}>
							<NavItem href={href}>{name}</NavItem>
						</li>
					))}
				</ul>
			</div>

			<button type="button" onClick={open} className="ml-auto md:hidden">
				<span className="sr-only">Otwórz nawigację</span>
				<Image src={MenuIcon} width="32" height="32" alt="" />
			</button>
		</>
	);
};

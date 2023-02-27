import { links } from '@/utils/links';
import { NavItem } from '../atoms/navItem/NavItem';
import { MobileNav } from '../molecules/mobileNav/MobileNav';

export const Navigation = () => {
	return (
		<nav className="container flex w-full justify-end py-10 md:justify-start md:py-12">
			{/* Desktop navigation */}
			<ul role="list" className="hidden gap-5 md:flex">
				{links.map(({ name, href }, index) => (
					<li key={index}>
						<NavItem href={href}>{name}</NavItem>
					</li>
				))}
			</ul>

			<MobileNav />
		</nav>
	);
};

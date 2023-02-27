import { NavItem } from '../atoms/navItem/NavItem';

const links = [
	{ name: 'Lista Serwerów', href: '/' },
	{ name: 'Regulamin', href: '/regulamin' },
	{ name: 'O Projekcie', href: '/o-projekcie' },
] as const;

export const Navigation = () => {
	return (
		<nav className="container mx-auto py-12">
			<ul className="flex gap-5">
				{links.map(({ name, href }, index) => (
					<li key={index}>
						<NavItem href={href}>{name}</NavItem>
					</li>
				))}
			</ul>
		</nav>
	);
};

import { usePathname } from 'next/navigation';

export const useIsNavItemActive = () => {
	const currentPath = usePathname();

	const isNavItemActive = (path: string) => {
		return currentPath === path;
	};

	return {
		isNavItemActive,
	};
};

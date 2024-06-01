import type { ReactNode } from 'react';
import { NavigationMenuList } from '@/components/ui-library/navigation-menu';

type NavigationListProps = {
	children: ReactNode;
};

export const NavigationList = ({ children }: NavigationListProps) => {
	return <NavigationMenuList>{children}</NavigationMenuList>;
};

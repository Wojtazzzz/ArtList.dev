import type { ReactNode } from 'react';
import { NavigationMenu } from '@/components/ui-library/navigation-menu';

type NavigationContainerProps = {
	children: ReactNode;
};

export const NavigationContainer = ({ children }: NavigationContainerProps) => {
	return <NavigationMenu className="max-w-full">{children}</NavigationMenu>;
};

import { CardTitle as UICardTitle } from '@/components/ui-library/card';
import { type ReactNode } from 'react';

type CardTitleProps = {
	children: ReactNode;
};

export const CardTitle = ({ children }: CardTitleProps) => {
	return <UICardTitle>{children}</UICardTitle>;
};

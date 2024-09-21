import { CardHeader as UICardHeader } from '@/components/ui-library/card';
import { type ReactNode } from 'react';

type CardHeaderProps = {
	children: ReactNode;
};

export const CardHeader = ({ children }: CardHeaderProps) => {
	return <UICardHeader>{children}</UICardHeader>;
};

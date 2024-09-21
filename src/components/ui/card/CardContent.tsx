import { CardContent as UICardContent } from '@/components/ui-library/card';
import { type ReactNode } from 'react';

type CardContentProps = {
	children: ReactNode;
};

export const CardContent = ({ children }: CardContentProps) => {
	return <UICardContent>{children}</UICardContent>;
};

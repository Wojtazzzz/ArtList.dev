import { CardFooter as UICardFooter } from '@/components/ui-library/card';
import { type ReactNode } from 'react';

type CardFooterProps = {
	children: ReactNode;
};

export const CardFooter = ({ children }: CardFooterProps) => {
	return <UICardFooter>{children}</UICardFooter>;
};

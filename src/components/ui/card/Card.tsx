import { Card as UICard } from '@/components/ui-library/card';
import { type ReactNode } from 'react';

type CardProps = {
	children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
	return <UICard>{children}</UICard>;
};

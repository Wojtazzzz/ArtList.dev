import { CardDescription as UICardDescription } from '@/components/ui-library/card';
import { type ReactNode } from 'react';

type CardDescriptionProps = {
	children: ReactNode;
};

export const CardDescription = ({ children }: CardDescriptionProps) => {
	return <UICardDescription>{children}</UICardDescription>;
};

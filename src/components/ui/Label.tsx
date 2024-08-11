import { Label as UILabel } from '@/components/ui-library/label';
import { type ReactNode } from 'react';

type LabelProps = {
	htmlFor?: string;
	children: ReactNode;
};

export const Label = ({ htmlFor, children }: LabelProps) => {
	return <UILabel htmlFor={htmlFor}>{children}</UILabel>;
};

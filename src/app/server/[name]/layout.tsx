import { Container } from '@/components/ui/Container';
import { type ReactNode } from 'react';

type ServerPageLayoutProps = {
	children: ReactNode;
};

export default function ServerPageLayout({ children }: ServerPageLayoutProps) {
	return <Container>{children}</Container>;
}

'use client';

import { useScrollToTop } from '@/components/scrollToTop/useScrollToTop';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const ScrollToTop = () => {
	const { isVisible, scrollToTop } = useScrollToTop();

	return (
		<div
			className={cn('fixed bottom-8 right-8 z-30 transition-all', {
				hidden: !isVisible,
			})}
		>
			<Button
				variant="outline"
				size="icon"
				disabled={!isVisible}
				onClick={scrollToTop}
			>
				<span className="sr-only">Wróć na górę strony</span>
				<ArrowUp size={28} />
			</Button>
		</div>
	);
};

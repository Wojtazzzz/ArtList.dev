'use client';

import { Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export const GoBackButton = () => {
	const router = useRouter();

	return (
		<Button variant="link" onClick={() => router.back()}>
			<span className="flex items-center gap-x-2 font-medium">
				<Undo2 size={20} />
				Powrót
			</span>
		</Button>
	);
};

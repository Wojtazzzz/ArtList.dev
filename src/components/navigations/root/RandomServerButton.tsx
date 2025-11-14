'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getRandomServer } from '@/actions/getRandomServer';
import { Button } from '@/components/ui/Button';

export const RandomServerButton = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleClick = async () => {
		setIsLoading(true);

		try {
			const { server, error } = await getRandomServer();

			if (error || !server) {
				console.error(error ?? 'Unknown error');
				return;
			}

			router.push(`/server/${server.name}`);
		} catch (error) {
			console.error('Failed to fetch random server:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button onClick={handleClick} disabled={isLoading}>
			{isLoading ? 'Losuję...' : 'Losuj serwer'}
		</Button>
	);
};

import { useRouter } from 'next/navigation';

export const useServersSort = (sort: string) => {
	const router = useRouter();

	const sortByName = async () => {
		if (sort === 'name') {
			router.push('/szukaj?sort=-name');
		} else {
			router.push('/szukaj?sort=name');
		}
	};

	const sortByPlayers = async () => {
		if (sort === 'players') {
			router.push('/szukaj?sort=-players');
		} else {
			router.push('/szukaj?sort=players');
		}
	};

	return {
		sortByName,
		sortByPlayers,
	};
};

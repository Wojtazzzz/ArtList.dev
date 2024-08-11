import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from '@/hooks/useSearchParams';
import { useDebouncedCallback } from 'use-debounce';
import { buildParams } from '@/utils/functions';

export const useSearch = () => {
	const { paramsObject, getParam } = useSearchParams();
	const [value, setValue] = useState(getParam('name') ?? '');
	const router = useRouter();

	const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		pushParams(event.target.value);
	};

	const pushParams = useDebouncedCallback((name) => {
		const params = buildParams({
			...paramsObject,
			name,
		});

		router.push(`/szukaj?${params}`);
	}, 300);

	return {
		value,
		onChangeValue,
	};
};

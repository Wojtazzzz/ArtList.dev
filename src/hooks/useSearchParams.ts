import { useSearchParams as useNextSearchParams } from 'next/navigation';

export const useSearchParams = () => {
	const params = useNextSearchParams();

	const getParam = (param: string) => {
		return params.get(param);
	};

	return {
		params,
		paramsObject: Object.fromEntries(params),
		getParam,
	};
};

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import moment from 'moment';

export const capitalize = (text: string) => {
	if (text.length <= 0) {
		return '';
	}

	return text[0].toUpperCase() + text.slice(1);
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const buildParams = (
	params: Record<string, string | null | undefined | number>
) => {
	const searchParams = new URLSearchParams();

	for (const [key, value] of Object.entries(params)) {
		if (!value) {
			continue;
		}

		searchParams.append(key, String(value));
	}

	return searchParams.toString();
};

export const formatDate = (date: string, format: string) => {
	return moment(new Date(date).toISOString()).format(format);
};

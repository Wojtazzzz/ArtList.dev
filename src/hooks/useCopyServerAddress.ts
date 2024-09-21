import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { capitalize } from '@/utils/functions';

export const useCopyServerAddress = () => {
	const { copyText } = useCopyToClipboard();

	const copyIp = async (ip: string) => {
		await copyText({
			text: ip,
			title: capitalize(ip),
			description: 'Adres serwera został skopiowany do schowka',
		});
	};

	return {
		copyIp,
	};
};

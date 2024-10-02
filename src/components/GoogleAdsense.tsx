import Script from 'next/script';
import { ADSENSE_CLIENT_KEY } from '@/utils/env';

export const GoogleAdsense = () => {
	return (
		<Script
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_KEY}`}
			strategy="afterInteractive"
		/>
	);
};

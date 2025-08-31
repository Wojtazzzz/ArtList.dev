import ServersPaginatedPage from '@/app/(servers-list)/[page]/page';
import type { Metadata } from 'next';
import { getCanonical } from '@/utils/functions';

export const metadata: Metadata = {
	alternates: {
		canonical: getCanonical('/'),
	},
};

export default ServersPaginatedPage;

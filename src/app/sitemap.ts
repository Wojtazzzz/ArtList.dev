import type { MetadataRoute } from 'next';
import { fetchData } from '@/utils/clients';
import { APP_URL } from '@/utils/env';

export const revalidate = 60 * 30; // 30 minutes

export default async function sitemap() {
	async function getServers() {
		const servers = await fetchData('/servers?page=1&limit=9999990', 0);

		return servers.data.map((server: { name: string }) => ({
			name: server.name,
		}));
	}

	return [
		{
			url: APP_URL,
			lastModified: new Date(),
			changeFrequency: 'hourly',
			priority: 1.0,
		},
		...(await getServers()).map((server: { name: string }) => ({
			url: `${APP_URL}/server/${server.name}`,
			lastModified: new Date(),
			changeFrequency: 'hourly',
			priority: 0.8,
		})),
		{
			url: APP_URL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
	] satisfies MetadataRoute.Sitemap;
}

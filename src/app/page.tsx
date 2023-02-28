import { Server } from '@/components/atoms/Server';
import { prisma } from '@/utils/prisma';

const fetchServers = async () => {
	return await prisma.server.findMany();
};

export default async function Home() {
	const servers = await fetchServers();

	return (
		<ul role="list" className="space-y-3">
			{servers.map((server) => (
				<li key={server.id}>
					<Server {...server} />
				</li>
			))}
		</ul>
	);
}

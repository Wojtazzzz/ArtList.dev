import { Server } from '@/components/atoms/Server';

const servers = [{ id: 1 }, { id: 2 }, { id: 3 }] as const;

export default function Home() {
	return (
		<div className="">
			<ul role="list" className="space-y-3">
				{servers.map((server) => (
					<li key={server.id}>
						<Server />
					</li>
				))}
			</ul>
		</div>
	);
}

import { fetchData } from '@/utils/clients';
import { Card } from '@/components/ui/card/Card';
import { CardHeader } from '@/components/ui/card/CardHeader';
import { CardContent } from '@/components/ui/card/CardContent';
import { CardTitle } from '@/components/ui/card/CardTitle';
import { Chart } from '@/components/modules/server/PlayersHistoryChart';
import { capitalize, cn } from '@/utils/functions';
import { CardDescription } from '@/components/ui/card/CardDescription';
import { CopyServerAddress } from '@/components/modules/server/CopyServerAddress';
import { GoBackButton } from '@/components/modules/server/GoBackButton';
import { TypographyH2, TypographyH3 } from '@/components/ui/Typography';

type Server = {
	id: number;
	name: string;
	motdFirstLine: string;
	motdSecondLine: string;
	online: boolean;
	version: string;
	statistics: {
		date: string;
		value: number;
	}[];
};

export async function generateStaticParams() {
	const servers = await fetchData('/servers?page=1&limit=9999990', 0);

	return servers.data.map((server: Server) => ({
		name: server.name,
	}));
}

const fetchServer = async (name: string) => {
	return await fetchData(`/servers/${name}`, 0);
};

type ServerPageParams = {
	params: {
		name: string;
	};
};

export default async function ServersPaginatedPage({
	params,
}: ServerPageParams) {
	const server = await fetchServer(params.name);

	return (
		<div className="space-y-6">
			<GoBackButton />

			<Card>
				<CardHeader>
					<CardTitle>
						<TypographyH2>{capitalize(server.name)}</TypographyH2>
					</CardTitle>
					<CardDescription>
						<span className="block">{server.motdFirstLine}</span>
						<span className="block">{server.motdSecondLine}</span>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-5">
						<div className="flex flex-wrap gap-x-2.5 text-sm">
							<div>
								<span>Online:&nbsp;</span>
								<span
									className={cn('font-medium', {
										'text-green-600': server.online,
										'text-red-400': !server.online,
									})}
								>
									{server.online ? 'Tak' : 'Nie'}
								</span>
							</div>
							<div>●</div>
							<div>
								<span>Wersja:&nbsp;</span>
								<span className="font-medium">{server.version}</span>
							</div>
						</div>

						<div>
							<CopyServerAddress address={server.name} />
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>
						<TypographyH3>Aktywni gracze z ostatnich 12 godzin</TypographyH3>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Chart data={server.statistics} />
				</CardContent>
			</Card>
		</div>
	);
}

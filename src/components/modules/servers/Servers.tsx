import { ServersTable } from '@/components/modules/servers/ServersTable';
import type { Server } from '@/utils/schema';
import { ServersList } from '@/components/modules/servers/ServersList';
import { TypographyH2, TypographyP } from '@/components/ui/Typography';

type ServersProps = {
	servers: Server[];
	page: number;
	defaultSort?: string;
};

export const Servers = ({ servers, page, defaultSort }: ServersProps) => {
	return (
		<>
			<TypographyH2 srOnly>Lista serwerów</TypographyH2>

			<TypographyP>
				<span className="text-sm">
					Kliknij w nazwę serwera, aby wyświetlić szczegóły.
				</span>
			</TypographyP>

			<div className="hidden md:block">
				<ServersTable
					servers={servers}
					page={page}
					defaultSort={defaultSort ?? '-players'}
				/>
			</div>
			<div className="block md:hidden">
				<ServersList
					servers={servers}
					page={page}
					defaultSort={defaultSort ?? '-players'}
				/>
			</div>
		</>
	);
};

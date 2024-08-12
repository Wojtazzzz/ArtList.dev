'use client';

import { ArrowUpDown } from 'lucide-react';
import { type Server } from '@/utils/schema';
import { SERVERS_LIMIT_PER_PAGE } from '@/utils/env';
import Image from 'next/image';
import { capitalize } from '@/utils/functions';
import { cn } from '@/utils/functions';
import { useServersSort } from '@/components/modules/servers/useServersSort';
import { CopyButton } from '@/components/ui/CopyButton';
import { useCopyServerAddress } from '@/components/modules/servers/useCopyServerAddress';
import { Table } from '@/components/ui/Table/Table';
import { TableCaption } from '@/components/ui/Table/TableCaption';
import { TableHeader } from '@/components/ui/Table/TableHeader';
import { TableHeadRow } from '@/components/ui/Table/TableHeadRow';
import { TableBodyRow } from '@/components/ui/Table/TableBodyRow';
import { TableBody } from '@/components/ui/Table/TableBody';
import { TableCell } from '@/components/ui/Table/TableCell';
import { TableHead } from '@/components/ui/Table/TableHead';
import { TypographyH3 } from '@/components/ui/Typography';

type ServersListProps = {
	servers: Server[];
	page: number;
	defaultSort?: string;
};

export function ServersList({
	servers,
	page,
	defaultSort = '-players',
}: ServersListProps) {
	const { sortByName, sortByPlayers } = useServersSort(defaultSort);
	const { copyIp } = useCopyServerAddress();

	if (servers.length <= 0) {
		return <div className="h-24 text-center">Brak serwerów.</div>;
	}

	return (
		<ul>
			{servers.map((server, index) => (
				<li
					key={server.id}
					className="border-b py-4 odd:bg-muted/40 hover:odd:bg-muted dark:odd:bg-muted/25 dark:hover:bg-muted/10"
				>
					<article className="space-y-5 px-2.5">
						<header className="flex items-center space-x-4">
							<div className="font-medium">
								{(Math.max(1, page) - 1) * SERVERS_LIMIT_PER_PAGE + (index + 1)}
							</div>
							<div className="my-auto h-full w-[64px]">
								{server.icon && (
									<Image
										src={server.icon}
										alt="Logo serwera"
										width="64"
										height="64"
									/>
								)}
							</div>

							<TypographyH3>
								<span className="font-medium">{server.name}</span>
							</TypographyH3>
						</header>

						<div className="flex items-center justify-between space-x-4 text-sm">
							<p
								className={cn({
									'text-base': !server.online,
								})}
							>
								<span className="sr-only">players:</span>
								{server.currentPlayers} / {server.maxPlayers}
							</p>

							<p
								className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap text-right"
								title={server.version ?? undefined}
							>
								<span className="sr-only">version:</span>
								{server.version}
							</p>
						</div>
					</article>
				</li>
			))}
		</ul>
	);
}

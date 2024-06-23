'use client';

import { ArrowUpDown } from 'lucide-react';
import { type Server } from '@/utils/schema';
import { SERVERS_LIMIT_PER_PAGE } from '@/utils/env';
import Image from 'next/image';
import { capitalize } from '@/utils/capitalize';
import { cn } from '@/lib/utils';
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

type ServersTableProps = {
	servers: Server[];
	page: number;
	defaultSort?: string;
};

export function ServersTable({
	servers,
	page,
	defaultSort = '-players',
}: ServersTableProps) {
	const { sortByName, sortByPlayers } = useServersSort(defaultSort);
	const { copyIp } = useCopyServerAddress();

	return (
		<Table>
			<TableCaption>Lista serwerów Minecraft.</TableCaption>
			<TableHeader>
				<TableHeadRow>
					<TableHead>#</TableHead>
					<TableHead>
						<button className="flex items-center" onClick={sortByName}>
							Nazwa
							<span className="sr-only">
								Sortuj według nazwy, alfabetycznie
							</span>
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</button>
					</TableHead>
					<TableHead>
						<button className="flex items-center" onClick={sortByPlayers}>
							Gracze
							<span className="sr-only">
								Sortuj według ilości aktywnych graczy
							</span>
							<ArrowUpDown className="ml-2 h-4 w-4" />
						</button>
					</TableHead>
					<TableHead>Wersja</TableHead>
					<TableHead>
						<div className="text-right">Opcje</div>
					</TableHead>
				</TableHeadRow>
			</TableHeader>

			<TableBody>
				{servers.length <= 0 ? (
					<TableBodyRow>
						<TableCell colSpan={5}>
							<div className="h-24 text-center">Brak serwerów.</div>
						</TableCell>
					</TableBodyRow>
				) : (
					servers.map((server, index) => (
						<TableBodyRow key={server.id}>
							<TableCell>
								<div className="font-medium">
									{(Math.max(1, page) - 1) * SERVERS_LIMIT_PER_PAGE +
										(index + 1)}
								</div>
							</TableCell>

							<TableCell>
								<div className="flex gap-x-1">
									<div className="my-auto mr-3.5 h-full w-[58px]">
										{server.icon && (
											<Image
												src={server.icon}
												alt="Logo serwera"
												width="58"
												height="58"
											/>
										)}
									</div>

									<div>
										<p className="mb-1 text-base font-medium">
											{capitalize(server.name)}
										</p>
										<div className="max-w-96 overflow-hidden">
											{server.motd_first_line && <p>{server.motd_first_line}</p>}
											{server.motd_second_line && <p>{server.motd_second_line}</p>}
										</div>
									</div>
								</div>
							</TableCell>

							<TableCell>
								<span
									className={cn({
										'text-red-600': !server.online,
									})}
								>
									{server.current_players} / {server.max_players}
								</span>
							</TableCell>

							<TableCell>
								<p
									className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap"
									title={server.version ?? undefined}
								>
									{server.version}
								</p>
							</TableCell>

							<TableCell>
								<div className="flex justify-end">
									<CopyButton
										label="Skopiuj adres IP serwera do schowka"
										onClick={() => copyIp(server.name)}
									/>
								</div>
							</TableCell>
						</TableBodyRow>
					))
				)}
			</TableBody>
		</Table>
	);
}

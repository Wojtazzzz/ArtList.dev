import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { Search } from '@/components/modules/servers/search/Search';
import { Container } from '@/components/ui/Container';

type ServersListLayoutProps = {
	children: ReactNode;
};

export default function ServersListLayout({
	children,
}: ServersListLayoutProps) {
	return (
		<Container>
			<div className="flex items-center py-4">
				<Suspense>
					<Search />
				</Suspense>

				{/*<DropdownMenu>*/}
				{/*  <DropdownMenuTrigger asChild>*/}
				{/*    <Button variant="outline" className="ml-auto">*/}
				{/*      Pokaż kolumny <ChevronDown className="ml-2 h-4 w-4" />*/}
				{/*    </Button>*/}
				{/*  </DropdownMenuTrigger>*/}
				{/*  <DropdownMenuContent align="end">*/}
				{/*    {table*/}
				{/*      .getAllColumns()*/}
				{/*      .filter((column) => column.getCanHide())*/}
				{/*      .map((column) => {*/}
				{/*        return (*/}
				{/*          <DropdownMenuCheckboxItem*/}
				{/*            key={column.id}*/}
				{/*            className="capitalize"*/}
				{/*            checked={column.getIsVisible()}*/}
				{/*            onCheckedChange={(value) => column.toggleVisibility(value)}*/}
				{/*          >*/}
				{/*            {column.id}*/}
				{/*          </DropdownMenuCheckboxItem>*/}
				{/*        );*/}
				{/*      })}*/}
				{/*  </DropdownMenuContent>*/}
				{/*</DropdownMenu>*/}
			</div>

			{children}
		</Container>
	);
}

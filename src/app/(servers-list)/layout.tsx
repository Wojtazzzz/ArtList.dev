import { ReactNode } from "react";
import { Search } from "@/components/modules/servers/search/Search";
import { Container } from "@/components/ui/Container";

type ServersListLaoutProps = {
  children: ReactNode;
};
export default function ServersListLayout({ children }: ServersListLaoutProps) {
  return (
    <main>
      <Container>
        <div className="flex items-center py-4">
          <Search />

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
    </main>
  );
}

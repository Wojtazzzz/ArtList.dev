"use client";

import { NavigationContainer } from "@/components/ui/navigation/NavigationContainer";
import { NavigationList } from "@/components/ui/navigation/NavigationList";
import { NavigationListItem } from "@/components/ui/navigation/NavigationListItem";
import { TypographyH1 } from "@/components/ui/Typography";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AddServerDialog } from "@/components/navigations/root/AddServerDialog";
import { ChangeTheme } from "@/components/ChangeTheme";

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Container>
        <div className="flex w-full flex-wrap items-center justify-between gap-y-4">
          <div>
            <Link href="/" className="flex items-center space-x-1.5 pr-1.5">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6"
                />
              </svg>

              <div className="self-center whitespace-nowrap text-2xl font-semibold">
                <TypographyH1>ArtList</TypographyH1>
              </div>

              <span>(beta)</span>
            </Link>
          </div>

          <NavigationList>
            <NavigationListItem>
              <div className="px-1 md:px-2">
                <AddServerDialog />
              </div>
            </NavigationListItem>
            <NavigationListItem>
              <div className="pl-1 md:pl-2">
                <ChangeTheme />
              </div>
            </NavigationListItem>
          </NavigationList>
        </div>
      </Container>
    </NavigationContainer>
  );
};

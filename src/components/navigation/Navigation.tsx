import Link from "next/link";
import { AddServerDialog } from "@/components/navigation/AddServerDialog";
import { ChangeTheme } from "@/components/ChangeTheme";
import { TypographyH1 } from "@/components/ui/Typography";

export const Navigation = () => {
  return (
    <nav className="border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-y-4 p-4">
        <Link href="/" className="flex items-center space-x-1.5 pr-1.5">
          <svg
            className="h-6 w-6 text-gray-800"
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

        <div className="w-auto">
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ul
            role="list"
            className="mt-0 flex space-x-4 rounded-lg border-gray-100 bg-white font-medium"
          >
            <li>
              <AddServerDialog />
            </li>
            <li>
              <ChangeTheme />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

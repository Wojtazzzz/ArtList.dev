import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-1.5">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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

          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            ArtList
          </span>
        </Link>

        <div className="w-auto">
          <ul className="font-medium flex border-gray-100 rounded-lg space-x-8 mt-0 bg-white">
            <li>
              <Button variant="default" asChild>
                <Link href="/dodaj-serwer">Dodaj serwer</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-12 w-full text-center text-sm lg:text-left">
      <div className="mx-auto max-w-screen-xl p-4 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div>
            <p className="mb-4 flex items-center justify-center font-semibold md:justify-start">
              <svg
                className="mr-1 h-4 w-4 text-gray-800 dark:text-white md:mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              ArtList
            </p>
            <p>
              Odkryj świat serwerów Minecraft! Znajdź idealny serwer do gry lub
              zareklamuj własny.
            </p>
          </div>

          <div></div>

          <div>
            <p className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Linki
            </p>
            <p className="mb-4">
              <Link href="/" className="hover:underline">
                Strona główna
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/regulamin" className="hover:underline">
                Regulamin serwisu
              </Link>
            </p>
          </div>

          <div>
            <p className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Kontakt
            </p>
            {/*<p className="mb-4 flex items-center justify-center md:justify-start">*/}
            {/*  <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">*/}
            {/*    <svg*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*      viewBox="0 0 24 24"*/}
            {/*      fill="currentColor"*/}
            {/*    >*/}
            {/*      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />*/}
            {/*      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />*/}
            {/*    </svg>*/}
            {/*  </span>*/}
            {/*  info@example.com*/}
            {/*</p>*/}
            <Link
              href="https://github.com/Wojtazzzz/ArtList.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="group mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <span className="group-hover:underline">Github</span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="pb-4 text-center">
        <span>© {new Date().getFullYear()} ArtList</span>
      </div>
    </footer>
  );
};

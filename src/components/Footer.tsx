import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-12 w-full text-center text-sm lg:text-left">
      <div className="mx-auto max-w-screen-xl p-4 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start">
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
            </h6>
            <p>
              Aplikacja umożliwiająca graczom udostępnianie i odkrywanie
              serwerów Minecraft.
            </p>
          </div>

          <div></div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Linki
            </h6>
            <p className="mb-4">
              <Link href="/" className="hover:underline">
                Strona główna
              </Link>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Kontakt
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              info@example.com
            </p>
          </div>
        </div>
      </div>

      <div className="pb-4 text-center">
        <span>© {new Date().getFullYear()} ArtList</span>
      </div>
    </footer>
  );
};

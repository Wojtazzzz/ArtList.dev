import Link from "next/link";
import { Logo } from "@/components/Logo";

const links = [
  {
    name: "Strona główna",
    href: "/",
    external: false,
  },
  {
    name: "Regulamin serwisu",
    href: "/regulamin",
    external: false,
  },
  {
    name: "Shadcn (ui)",
    href: "https://ui.shadcn.com/",
    external: true,
  },
] as const;

export const Footer = () => {
  return (
    <footer className="mt-12 w-full text-center text-sm lg:text-left">
      <div className="mx-auto max-w-screen-xl p-4 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center justify-center font-semibold md:justify-start">
              <div className="mr-1 md:mr-1.5">
                <Logo size="sm" />
              </div>
              ArtList
            </div>
            <p>
              Odkryj świat serwerów Minecraft! Znajdź idealny serwer do gry lub
              zareklamuj własny.
            </p>
          </div>

          <div></div>

          <div className="space-y-4">
            <p className="flex justify-center font-semibold uppercase md:justify-start">
              Linki
            </p>

            {links.map(({ name, href, external }, index) => (
              <p key={index}>
                <Link
                  href={href}
                  className="hover:underline"
                  rel={external ? "noopener noreferrer" : undefined}
                  target={external ? "_blank" : "_self"}
                >
                  {name}
                </Link>
              </p>
            ))}
          </div>

          <div>
            <p className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Kontakt
            </p>
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
        <span>© {new Date().getFullYear()} ArtList.dev</span>
      </div>
    </footer>
  );
};

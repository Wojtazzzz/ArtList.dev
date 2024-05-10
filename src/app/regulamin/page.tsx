import { Container } from "@/components/ui/Container";
import { Metadata } from "next";
import Link from "next/link";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Regulamin serwisu - ArtList.pl",
};

export default async function StatutePage() {
  return (
    <main>
      <Container>
        <article className="prose mx-auto !max-w-[100ch]">
          <TypographyH2 id="statute-title">
            <span className="text-3xl font-bold">Regulamin Serwisu</span>
          </TypographyH2>

          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ol
            role="list"
            className="list-decimal dark:marker:text-gray-300"
            aria-labelledby="statute-title"
          >
            <li>
              <TypographyP>
                Aplikacja ArtList.pl służy do dzielenia się adresami serwerów do
                gry Minecraft.
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                Za treści niezwiązane z tematyką witryny uważane są wszelkie
                reklamy czy linki do innych stron o podobnej tematyce (listy
                serwerów/hostingi itd.) bez uprzedniej zgody administratora
                serwisu.
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                Dodanie serwera do listy jest w pełni darmowe i nie wymaga
                rejestracji konta.
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                W serwisie nie wolno umieszczać treści powszechnie uważanych za
                wulgarne, treści naruszających prawa autorskie oraz materiałów
                pornograficznych.
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                Treści publikowane przez użytkowników mogą być moderowane. W
                przypadku naruszeń regulaminu mogą być również usunięte bez
                uprzedzenia.
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                W przypadku naruszenia postanowień regulaminu dostęp do witryny
                może zostać zablokowany.
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                Każdy użytkownik, również anonimowy może opublikować adres do
                serwera Minecraft.
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                Informacje na temat opublikowanych serwerów są pobierane
                cyklicznie z publicznie udostępnionego{" "}
                <Link
                  href="https://mcsrvstat.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white"
                >
                  api
                </Link>
                .
              </TypographyP>
            </li>
          </ol>
        </article>
      </Container>
    </main>
  );
}

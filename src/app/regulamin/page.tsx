import { Container } from "@/components/ui/Container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regulamin serwisu - ArtList.pl",
  description:
    "Odkryj świat serwerów Minecraft! Znajdź idealny serwer do gry lub zareklamuj własny.",
};

export default async function StatutePage() {
  return (
    <main>
      <Container>
        <article className="prose mx-auto !max-w-[100ch]">
          <h2>Regulamin Serwisu</h2>
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ol role="list" className="list-decimal">
            <li>
              Aplikacja ArtList.pl służy do dzielenia się adresami serwerów do
              gry Minecraft.
            </li>
            <li>
              Za treści niezwiązane z tematyką witryny uważane są wszelkie
              reklamy czy linki do innych stron o podobnej tematyce (listy
              serwerów/hostingi itd.) bez uprzedniej zgody administratora
              serwisu.
            </li>
            <li>
              Dodanie serwera do listy jest w pełni darmowe i nie wymaga
              rejestracji konta.
            </li>
            <li>
              W serwisie nie wolno umieszczać treści powszechnie uważanych za
              wulgarne, treści naruszających prawa autorskie oraz materiałów
              pornograficznych.
            </li>
            <li>
              Treści publikowane przez użytkowników mogą być moderowane. W
              przypadku naruszeń regulaminu mogą być również usunięte bez
              uprzedzenia.
            </li>
            <li>
              W przypadku naruszenia postanowień regulaminu dostęp do witryny
              może zostać zablokowany.
            </li>
            <li>
              Każdy użytkownik, również anonimowy może opublikować adres do
              serwera Minecraft.
            </li>
            <li>
              Informacje na temat opublikowanych serwerów są pobierane
              cyklicznie z publicznie udostępnionego{" "}
              <Link
                href="https://mcsrvstat.us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </Link>
              .
            </li>
          </ol>
        </article>
      </Container>
    </main>
  );
}

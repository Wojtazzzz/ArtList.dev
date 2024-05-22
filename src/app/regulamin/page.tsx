import { Container } from "@/components/ui/Container";
import { Metadata } from "next";
import { TypographyH2, TypographyP } from "@/components/ui/Typography";
import { rules } from "@/utils/data/rules";

export const metadata: Metadata = {
  title: "Regulamin serwisu - ArtList.pl",
};

export default async function StatutePage() {
  return (
    <Container>
      {rules.map((section, sectionIndex) => (
        <section className="prose mx-auto !max-w-[100ch]" key={sectionIndex}>
          <TypographyH2 id="statute-title">
            <span className="text-3xl font-bold">{section.header}</span>
          </TypographyH2>

          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ol
            role="list"
            className="list-decimal dark:marker:text-gray-300"
            aria-labelledby="statute-title"
          >
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <li key={paragraphIndex}>
                <TypographyP>{paragraph}</TypographyP>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </Container>
  );
}

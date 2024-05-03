import type { Metadata } from "next";
import "../styles/globals.css";
import { type ReactNode } from "react";
import { Toaster } from "@/components/ui-library/toaster";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/navigation/Navigation";

export const metadata: Metadata = {
  title: "Lista serwerów Minecraft - ArtList.pl",
  description:
    "Odkryj świat serwerów Minecraft! Znajdź idealny serwer do gry lub zareklamuj własny.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body>
        <Providers>
          <Navigation />

          {children}

          <Footer />

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

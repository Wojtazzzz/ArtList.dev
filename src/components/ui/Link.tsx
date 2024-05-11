import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type LinkVariant = "internal" | "external";

type LinksProps = {
  variant?: LinkVariant;
} & Pick<NextLinkProps, "href"> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "target">;

export const Link = ({
  variant = "internal",
  href,
  target,
  children,
}: LinksProps) => {
  return (
    <NextLink
      href={href}
      target={target}
      rel={variant === "external" ? "noopener noreferrer" : undefined}
    >
      {children}
    </NextLink>
  );
};

import { HTMLAttributes, ReactNode } from "react";

type TypographyH1Props = {
  children: ReactNode;
} & Pick<HTMLAttributes<HTMLHeadingElement>, "id">;

export function TypographyH1({ children, ...props }: TypographyH1Props) {
  return (
    <h1
      className="scroll-m-20 font-extrabold tracking-tight dark:text-white"
      {...props}
    >
      {children}
    </h1>
  );
}

type TypographyH2Props = {
  children: ReactNode;
} & Pick<HTMLAttributes<HTMLHeadingElement>, "id">;

export function TypographyH2({ children, ...props }: TypographyH2Props) {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 font-semibold tracking-tight first:mt-0 dark:text-white"
      {...props}
    >
      {children}
    </h2>
  );
}

type TypographyH3Props = {
  children: ReactNode;
} & Pick<HTMLAttributes<HTMLHeadingElement>, "id">;

export function TypographyH3({ children, ...props }: TypographyH3Props) {
  return (
    <h3
      className="scroll-m-20 font-semibold tracking-tight dark:text-white"
      {...props}
    >
      {children}
    </h3>
  );
}

type TypographyH4Props = {
  children: ReactNode;
} & Pick<HTMLAttributes<HTMLHeadingElement>, "id">;

export function TypographyH4({ children, ...props }: TypographyH4Props) {
  return (
    <h4
      className="scroll-m-20 font-semibold tracking-tight dark:text-white"
      {...props}
    >
      {children}
    </h4>
  );
}

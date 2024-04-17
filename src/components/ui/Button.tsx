import { ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import {
  Button as UIButton,
  buttonVariants,
} from "@/components/ui-library/button";
import type { VariantProps } from "class-variance-authority";

type ButtonProps = {
  children: ReactNode;
} & VariantProps<typeof buttonVariants> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, ...props }: ButtonProps, ref) => {
    return (
      <UIButton variant={variant} ref={ref} {...props}>
        {children}
      </UIButton>
    );
  },
);

import { ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import {
  Button as UIButton,
  buttonVariants,
} from "@/components/ui-library/button";
import type { VariantProps } from "class-variance-authority";
import { useFormStatus } from "react-dom";

type FormStatusButtonProps = {
  children: ReactNode;
} & VariantProps<typeof buttonVariants> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export const FormStatusButton = forwardRef<
  HTMLButtonElement,
  FormStatusButtonProps
>(({ variant, children, ...props }: FormStatusButtonProps, ref) => {
  const { pending } = useFormStatus();

  return (
    <UIButton variant={pending ? "ghost" : variant} ref={ref} {...props}>
      {children}
    </UIButton>
  );
});

FormStatusButton.displayName = "FormStatusButton";

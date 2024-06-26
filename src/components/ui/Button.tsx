import type { ButtonHTMLAttributes } from 'react';
import { forwardRef, type ReactNode } from 'react';
import type { buttonVariants } from '@/components/ui-library/button';
import { Button as UIButton } from '@/components/ui-library/button';
import type { VariantProps } from 'class-variance-authority';

type ButtonProps = {
	disabled?: boolean;
	children: ReactNode;
} & VariantProps<typeof buttonVariants> &
	Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ disabled = false, variant, children, ...props }: ButtonProps, ref) => {
		return (
			<UIButton
				variant={variant}
				disabled={disabled}
				aria-disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</UIButton>
		);
	}
);

Button.displayName = 'Button';

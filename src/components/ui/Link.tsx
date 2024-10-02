'use client';

import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import type { AnchorHTMLAttributes, ComponentPropsWithRef } from 'react';

type LinkVariant = 'internal' | 'external';

type LinksProps = ComponentPropsWithRef<typeof NextLink> & {
	variant?: LinkVariant;
} & Pick<NextLinkProps, 'href'> &
	Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'target'>;

export const Link = ({
	variant = 'internal',
	href,
	target,
	children,
	...props
}: LinksProps) => {
	const router = useRouter();

	const prefetch = () => {
		const hasFastInternet =
			!navigator.connection || navigator.connection.effectiveType === '4g';

		if (hasFastInternet) {
			void router.prefetch(href.toString());
		}
	};

	return (
		<NextLink
			href={href}
			target={target}
			rel={variant === 'external' ? 'noopener noreferrer' : undefined}
			prefetch={false}
			onMouseEnter={(e) => {
				prefetch();
				props.onMouseEnter?.(e);
			}}
			onPointerEnter={(e) => {
				prefetch();
				props.onPointerEnter?.(e);
			}}
			onTouchStart={(e) => {
				prefetch();
				props.onTouchStart?.(e);
			}}
			onFocus={(e) => {
				prefetch();
				props.onFocus?.(e);
			}}
		>
			{children}
		</NextLink>
	);
};

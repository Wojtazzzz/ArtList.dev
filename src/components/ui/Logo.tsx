import { cn } from '@/lib/utils';

type LogoSize = 'sm' | 'base';

type LogoProps = {
	size: LogoSize;
};

export const Logo = ({ size }: LogoProps) => {
	return (
		<div>
			<svg
				className={cn('text-gray-800 dark:text-white', {
					'h-6 w-6': size === 'base',
					'h-4 w-4': size === 'sm',
				})}
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6"
				/>
			</svg>
		</div>
	);
};

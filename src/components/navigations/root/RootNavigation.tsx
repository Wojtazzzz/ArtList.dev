'use client';

import { NavigationContainer } from '@/components/ui/navigation/NavigationContainer';
import { NavigationList } from '@/components/ui/navigation/NavigationList';
import { NavigationListItem } from '@/components/ui/navigation/NavigationListItem';
import { TypographyH1 } from '@/components/ui/Typography';
import { Container } from '@/components/ui/Container';
import { AddServerDialog } from '@/components/navigations/root/AddServerDialog';
import { ChangeTheme } from '@/components/ChangeTheme';
import { Logo } from '@/components/ui/Logo';
import { Link } from '@/components/ui/Link';

export const RootNavigation = () => {
	return (
		<NavigationContainer>
			<Container>
				<div className="flex w-full flex-wrap items-center justify-between gap-y-4">
					<Link href="/">
						<div className="flex items-center space-x-1.5 pr-1.5">
							<Logo size="base" />

							<div className="self-center whitespace-nowrap text-2xl font-semibold">
								<TypographyH1>ArtList</TypographyH1>
							</div>

							<span>(beta)</span>
						</div>
					</Link>

					<NavigationList>
						<NavigationListItem>
							<div className="px-1 md:px-2">
								<AddServerDialog />
							</div>
						</NavigationListItem>
						<NavigationListItem>
							<div className="pl-1 md:pl-2">
								<ChangeTheme />
							</div>
						</NavigationListItem>
					</NavigationList>
				</div>
			</Container>
		</NavigationContainer>
	);
};

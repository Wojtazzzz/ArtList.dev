import {
	ChartConfig,
	ChartContainer as UIChartContainer,
} from '@/components/ui-library/chart';
import { type ReactElement } from 'react';

type CharContainerProps = {
	config: ChartConfig;
	children: ReactElement;
};

export const ChartContainer = ({ config, children }: CharContainerProps) => {
	return <UIChartContainer config={config}>{children}</UIChartContainer>;
};

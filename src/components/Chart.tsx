'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui-library/chart';
import { formatDate } from '@/utils/functions';

export const description = 'A simple area chart';

const chartConfig = {
	value: {
		label: 'Graczy',
		color: 'hsl(var(--chart-1))',
	},
} satisfies ChartConfig;

type ChartProps = {
	data: {
		date: string;
		value: string;
	}[];
};

export function Chart({ data }: ChartProps) {
	return (
		<ChartContainer config={chartConfig}>
			<AreaChart
				accessibilityLayer
				data={data.map((stat) => ({
					date: formatDate(stat.date, 'YYYY.M.D H:00'),
					value: stat.value,
				}))}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="date"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
					tickFormatter={(value) => formatDate(value, 'H:00')}
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent indicator="line" />}
				/>
				<Area
					dataKey="value"
					type="natural"
					fill="var(--color-value)"
					fillOpacity={0.4}
					stroke="var(--color-value)"
				/>
			</AreaChart>
		</ChartContainer>
	);
}

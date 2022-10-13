import { ChartProps } from "./types";

export const chartConfig: ChartProps["options"] = {
	chart: {
		type: "spline",
	},
	title: {
		text: "My chart",
	},
	series: [
		{
			data: [1, 2, 1, 4, 3, 6],
		},
	],
};

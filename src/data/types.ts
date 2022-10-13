interface Series {
	data: number[];
}
export interface ChartConfig {
	chart: {
		type: string;
	};
	title: {
		text: string;
	};
	series: Series[];
}

export interface ChartProps {
	options: ChartConfig;
}

export interface TableProps {
	data: {
		make: string;
		model: string;
		price: number;
	}[];
}

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";
import { ChartProps } from "../data/types";

const Chart = ({ options }: ChartProps) => {
	const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

	return (
		<HighchartsReact
			ref={chartComponentRef}
			highcharts={Highcharts}
			options={options}
		/>
	);
};

export default Chart;

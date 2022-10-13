import axios from "axios";

export const fetchTableData = async () => {
	const { data } = await axios.get(
		`https://www.ag-grid.com/example-assets/row-data.json`,
	);
	return data;
};

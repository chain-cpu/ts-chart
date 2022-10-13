import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { AgGridReact } from "ag-grid-react";
import { fetchTableData } from "../APIs/tableAPIs";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Table = () => {
	const { data } = useQuery(["data"], fetchTableData);
	const columnDefs = useMemo(
		() => [
			{ field: "make", filter: true },
			{ field: "model", filter: true },
			{ field: "price" },
		],
		[],
	);
	return (
		<AgGridReact
			className='ag-theme-alpine'
			containerStyle={{ minHeight: 400, minWidth: 320 }}
			rowData={data || []}
			columnDefs={columnDefs}
			animateRows={true}
			rowSelection='multiple'
		/>
	);
};

export default Table;

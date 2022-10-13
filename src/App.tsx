import { Grid, Container } from "@mui/material";
import { chartConfig } from "./data/index";
import Chart from "./components/chart";
import Table from "./components/table";

function App() {
	return (
		<Container>
			<h1 style={{ textAlign: "center" }}>Table With Chart</h1>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={12} xl={6} lg={6}>
					<Chart options={chartConfig} />
				</Grid>
				<Grid item xs={12} sm={12} md={12} xl={6} lg={6}>
					<Table />
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;

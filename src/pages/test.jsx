import { Box, Typography } from "@mui/material";
import PageLayoutTemplate from "../components/PageLayout";

function TestPage() {

	return (
		<PageLayoutTemplate title="Test Page">
			<Box>
				<Typography sx={{ color: '#000' }}>This is the contents of the test page</Typography>
			</Box>
		</PageLayoutTemplate>
	);  

}

export default TestPage
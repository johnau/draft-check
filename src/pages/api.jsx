import { Box, Typography } from "@mui/material";
import PageLayoutTemplate from "../components/PageLayout";

function ApiPage() {

	return (
		<PageLayoutTemplate title="Checking API">
			<Box>
				<Typography textAlign='justify' sx={{ pb: 2 }}>
					The Draft Check Australia API is currently in development.  Once operational, the API will allow for seamless integration into your companies applications to automate your workflows.
				</Typography>
				<Typography variant='h5' sx={{ pb: 2 }}>
					<br />
					Check back soon for more information...
				</Typography>
			</Box>
		</PageLayoutTemplate>
	);  

}

export default ApiPage;
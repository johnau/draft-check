import { Box, Typography } from "@mui/material";
import PageLayoutTemplate from "../components/PageLayout";

function AboutPage() {

	return (
		<PageLayoutTemplate title="About Us">
			<Box>
				<Typography textAlign='justify' sx={{ pb: 2 }}>
                Welcome to Draft Check Australia, where precision meets peace of mind in the construction and fabrication industries. With a focus on minimizing errors and maximizing efficiency, we specialize in providing top-notch checking services for companies engaged in structural design, architectural design, steel detailing, shop drawings, and more. Our mission is to serve as your trusted partner, offering meticulous scrutiny of your drawings to ensure accuracy, reduce mistakes, and ultimately save you valuable resources down the track.
                </Typography>
                <Typography textAlign='justify' sx={{ pb: 2 }}>
                At Draft Check Australia, we understand the critical role that accurate drawings play in the success of any construction or manufacturing project. Our team of seasoned professionals brings years of industry expertise to the table, in design, documentation and on-the-tools construction, serving as the second pair of eyes your projects deserve. We meticulously review your drawings, identifying potential errors and inconsistencies that might have otherwise gone unnoticed. By entrusting us with your checking needs, you gain additional peace-of-mind, allowing you to proceed with confidence in your project's success.
                </Typography>
                <Typography textAlign='justify' sx={{ pb: 2 }}>
                As technology evolves, so do our services. Draft Check Australia is at the forefront of innovation, currently developing an advanced AI checking system. Leveraging cutting-edge artificial intelligence technology, this system is designed to expedite the checking process, detect a broad range of errors, and eventually, deliver near-instant results. We believe that combining human expertise with AI capabilities will revolutionize the way drawings are scrutinized, offering our clients unparalleled efficiency and accuracy in the checking process. Stay tuned as we continue to lead the industry towards a future where precision and technology converge seamlessly.
                </Typography>
			</Box>
		</PageLayoutTemplate>
	);  
}

export default AboutPage;






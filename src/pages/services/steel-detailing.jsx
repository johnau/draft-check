import { Box, Button, Typography } from "@mui/material";
import PageLayoutTemplate from "../../components/PageLayout";

function SteelDetailingServicePage() {

    return (
        <PageLayoutTemplate title="Services: Steel Detailing Checking">
            <Box>
                <Typography textAlign='justify' sx={{ pb: 2 }}>
                    Welcome to Draft Check Australia's specialized Steel Detailing Checking service. We meticulously examine every detail to ensure the buildability and precision of your steel details. Our dedicated team of experts goes beyond a cursory glance, delving into the intricate dimensions to guarantee accuracy that stands up to scrutiny. Logical dimensioning takes center stage in our process, as we meticulously assess and validate each dimension, ensuring not only correctness but also a coherent and logical flow that aligns seamlessly with the overall design.
                </Typography>
                <Typography textAlign='justify' sx={{ pb: 2 }}>
                    In our rigorous Steel Detailing Checking process, we collaborate closely with our clients to customize the checks. Alignments are scrutinized for optimal structural cohesion, and quantities are cross-verified to eliminate discrepancies. Our meticulous approach extends to thorough checks against sketch drawings and engineering drawings, ensuring seamless integration and adherence to the initial design intent. We take pride in our commitment to precision, offering a flexible and collaborative approach that instills confidence. At Draft Check Australia, we are your trusted partner in steel detailing, providing a comprehensive checking service that is customized to elevate the quality of your project to unparalleled heights.
                </Typography>
                <Button variant='contained' className="large-black-button">
					Enquire Now
				</Button>
            </Box>
        </PageLayoutTemplate>
    );

}

export default SteelDetailingServicePage;
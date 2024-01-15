import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import PageLayoutTemplate from "../components/PageLayout";


const p = [
    { index: 1, title: 'AI-Enhanced Checking', text: 'Our service integrates advanced artificial intelligence technology to enhance the efficiency of steel detailing checks. We strive for optimal performance, yet it\'s important to note that the AI service experience may vary per client and job. We continuously refine our AI algorithms to improve accuracy and effectiveness.' },
    { index: 2, title: 'Customization for Each Client', text: 'Recognizing the unique nature of each client and project, our service is designed to be flexible. We collaborate closely with clients to customize the checking process to meet individual preferences and specific requirements.' },
    { index: 3, title: 'Intellectual Property and Ownership', text: 'Clients maintain complete ownership of their intellectual property, including drawings and project-specific information submitted for our services. Draft Check Australia does not assert any rights over the creative works provided; our role is strictly limited to the checking and verification process.' },
    { index: 4, title: 'Responsibility for Drawings', text: 'While our service aims to enhance the accuracy of drawings, it is crucial to understand that the ultimate responsibility for the accuracy and completeness of drawings rests with the client, architect, or engineer who produces them. Draft Check Australia serves as a supplemental checking service and does not assume responsibility for any missing problems, errors, or omissions in the original drawings.' },
    { index: 5, title: 'Client Verification', text: 'Clients are responsible for thoroughly reviewing the results of our checking service. It is advisable to conduct additional checks, whether by human review or other means, to ensure comprehensive identification of potential issues. Draft Check Australia recommends that clients involve their architects, engineers, or relevant professionals in the review process.' },
    { index: 6, title: 'Limitation of Liability', text: 'Draft Check Australia, including its employees and agents, shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. This includes, but is not limited to, errors, omissions, or inaccuracies detected or undetected during the checking process.' },
    { index: 7, title: 'Acceptance of Responsibility', text: 'By engaging with Draft Check Australia\'s AI-Enhanced Steel Detailing Checking Service, clients acknowledge and accept responsibility for the final accuracy and completeness of the drawings. Our service is intended to assist and complement, but not replace, human expertise in the checking process.' },
    { index: 8, title: 'Acceptance of Terms', text: 'Clients agree to these terms of service when availing our checking services. It is essential to thoroughly review and understand these terms before proceeding. If you have any questions or require clarification, please contact us for further assistance.' },
]

function TosPage() {

    return (
        <PageLayoutTemplate title="Terms of Service">
            <Box>
                <Typography textAlign='justify' sx={{ pb: 2 }}>
                    Welcome to Draft Check Australia's AI-Enhanced Steel Detailing Checking Service. These terms outline the terms and conditions governing your use of our services, emphasizing our commitment to providing a customizable and efficient experience. Please carefully review these terms as they detail important aspects of our service, including limitations of responsibility.
                </Typography>
                <List>
                    {
                        p.map((value) => (
                            <ListItem>
                                <Stack>
                                    <Typography className='plain-text' sx={{ }}>
                                        <b>{value.index}. {value.title}</b>
                                    </Typography>
                                    <Typography className='plain-text' sx={{  }}>
                                        {value.text}
                                    </Typography>
                                </Stack>
                            </ListItem>
                        ))
                    }
                </List>
                <Typography textAlign='justify' sx={{ pt: 2, pb: 2 }}>
                    Thank you for choosing Draft Check Australia. We are dedicated to providing a valuable checking service while emphasizing the importance of shared responsibility for the accuracy and completeness of the drawings.
                </Typography>
            </Box>
        </PageLayoutTemplate>
    );

}

export default TosPage;
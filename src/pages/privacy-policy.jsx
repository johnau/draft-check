import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import PageLayoutTemplate from "../components/PageLayout";


const p = [
    { index: 1, title: 'Collection and Use of Information', text: 'We collect and process information necessary for our Steel Detailing Checking service. This may include personal data, contact details, and project-specific information. We use this information solely for the purpose of delivering our services, ensuring the accuracy of steel drawings, and customizing our checking process to meet your unique requirements.' },
    { index: 2, title: 'Data Security', text: 'We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. Our stringent security protocols ensure that your creative and intellectual property rights remain confidential and secure throughout the checking process.' },
    { index: 3, title: 'Confidentiality of Drawings', text: 'Draft Check Australia respects the sensitive nature of the drawings and documents submitted for our services. We strictly adhere to a confidentiality policy that prevents the sharing, reproduction, or use of any drawings or project-related information for purposes other than the intended checking service. Your intellectual property rights are paramount, and we take every measure to uphold and protect them.' },
    { index: 4, title: 'Third-Party Access', text: 'We do not share your information with third parties without your explicit consent, except when required by law. Any third parties engaged in the checking process are bound by confidentiality agreements to uphold the same level of data protection and privacy standards.' },
    { index: 5, title: 'Retention of Information', text: 'We retain your information only for the duration necessary to fulfill the purpose for which it was collected. Once the checking process is complete, we securely dispose of all relevant data, ensuring that your information is not retained beyond what is necessary.' },
    { index: 6, title: 'Transparency and Communication', text: 'Draft Check Australia is committed to transparency. If you have any questions regarding our privacy practices or the handling of your data, please contact us. We are here to address your concerns and ensure your confidence in our commitment to privacy.' },
]

function PrivacyStatementPage() {

    return (
        <PageLayoutTemplate title="Privacy Policy">
            <Box>
                <Typography textAlign='justify' sx={{ pb: 2 }}>
                    At Draft Check Australia, we recognize the importance of privacy and the protection of your personal and sensitive information. This Privacy Statement outlines our commitment to safeguarding your data and ensuring the confidentiality of the creative and intellectual property rights entrusted to us.
                </Typography>
                <List>
                    {
                        p.map((value) => (
                            <ListItem>
                                <Stack>
                                    <Typography className='plain-text'>
                                        <b>{value.index}. {value.title}</b>
                                    </Typography>
                                    <Typography className='plain-text'>
                                        {value.text}
                                    </Typography>
                                </Stack>
                            </ListItem>
                        ))
                    }
                </List>
                <Typography textAlign='justify' sx={{ pt: 2, pb: 2 }}>
                    By choosing Draft Check Australia, you entrust us with your data and creative works, and we take this responsibility seriously. Our Privacy Statement reflects our dedication to maintaining the highest standards of privacy and protection for your valuable information and intellectual property rights.
                </Typography>
            </Box>
        </PageLayoutTemplate>
    );

}

export default PrivacyStatementPage;
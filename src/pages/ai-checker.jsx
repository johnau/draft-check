import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import PageLayoutTemplate from "../components/PageLayout";
import Background from "../components/Background";
import FileDropZoneComponent from "../components/FileDropZone";
import FileDetailsSubmitForm from "../components/FileSubmitForm";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: 'white', // Customize label color
					fontFamily: 'sharetech, sans-serif',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					backgroundColor: 'black',
					borderColor: 'white',
					color: 'white',
				},
				input: {
					color: 'white',
					fontFamily: 'sharetech-mono, sans-serif',
				},
				notchedOutline: {
					borderColor: 'white',
					color: 'white',
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					backgroundColor: 'black',
					borderColor: 'white',
					color: 'white',
					borderRadius: 0,
				},
				input: {
					color: 'white',
					fontFamily: 'sharetech-mono, sans-serif',
				},
				notchedOutline: {
					borderColor: 'white',
					color: 'white',
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					backgroundColor: 'black',
					borderColor: 'white',
					color: 'white',
				},
				input: {
					color: 'white',
					fontFamily: 'sharetech-mono, sans-serif',
				},
				notchedOutline: {
					borderColor: 'white',
					color: 'white',
				},

			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					paddingTop: 0,
					paddingBottom: 0,
					border: '3px solid black',
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					fontFamily: 'sharetech-mono, sans-serif', // Customize the font family
					backgroundColor: 'yellow',
					color: 'black',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
				},
			},
		},
	},
});

function AiCheckerPage() {
	const [droppedFiles, setDroppedFiles] = useState([]);

	const handleFilesDropped = (files) => {
		setDroppedFiles(files);
	};

	return (
		<>
			<Box sx={{ height: 'calc(100vh - 200px)', position: 'relative', pt: '100px' }}>
				<Box sx={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'top', flexDirection: 'column', gap: 5 }}>
					<Typography variant="h3" sx={{ color: 'white', fontFamily: 'sharetech' }}>
						Submit drawing for A.I. checking
					</Typography>
					<Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, pb: '50px' }}>
						<Box className="form-container" sx={{ width: '30%', height: '100%', p: 1 }}>
							<div>
								<ThemeProvider theme={theme}>
									<FileDetailsSubmitForm submittedFiles={droppedFiles} />
								</ThemeProvider>
							</div>
						</Box>
						<Box sx={{ width: '50%', height: '100%' }}>
							<FileDropZoneComponent onFilesDropped={handleFilesDropped} />
						</Box>
					</Box>
				</Box>
				{/* <Box sx={{ height: '250px' }} /> */}
			</Box>
			<Background />
		</>
	);

}

export default AiCheckerPage;
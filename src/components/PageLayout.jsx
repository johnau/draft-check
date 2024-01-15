import { Box, Typography } from '@mui/material';
import './PageLayout.css';
import getWindowSize from './Viewport';
import { useEffect, useState } from 'react';

// import { ThemeProvider } from '@mui/system';
// import lightModeTheme from '../util/lightModeTheme';

function PageLayoutTemplate({ title, children }) {
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
	const [viewportSize, setViewportSize] = useState(getWindowSize(viewportWidth, viewportHeight));

	// window resize handler
	const handleResize = () => {
		setViewportWidth(window.innerWidth);
		setViewportHeight(window.innerHeight);
		setViewportSize(getWindowSize(window.innerWidth, window.innerHeight));
	};

	// Setup values and listeners
	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		// <ThemeProvider theme={lightModeTheme}>
		<Box className="page-box" sx={{ backgroundColor: '#fff', minHeight: '100vh', minWidth: '100vw' }}>
			<Box sx={{ minHeight: '100px', maxHeight: '100px' }} />
			<Typography variant='h2' color='#000' sx={{ pb: 5 }}>
				{title}
			</Typography>
			<Box className="content" sx={{ mx: 'auto', width: viewportSize == 'mobile' ? '90%' : viewportSize == 'desktop' ? '50%' : '80%' }}>
				{children}
			</Box>
			<Box sx={{ minHeight: '100px', maxHeight: '100px' }} />
		</Box>
		// </ThemeProvider>
	);
}

export default PageLayoutTemplate;
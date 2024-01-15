import React, { useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Stack, Typography, styled } from '@mui/material';
import logo from '../assets/logo.svg';
import './Toolbar.css';
import { Image } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

const NormalTextButton = styled(Button)({
	paddingLeft: '20px',
	paddingRight: '20px'
	// textTransform: 'none',
	// width: '100px'
});

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'left',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'left',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		minWidth: 150,
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
		borderRadius: 0,
		paddingBottom: 4,
		color: 'white',
		'& .MuiMenu-list': {
			padding: '0px 5px',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 20,
			},
			'&:hover': {
				color: '#000',
				backgroundColor: 'yellow',
			},
		},
	},
}));

const ToolbarComponent = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Stack direction="row" sx={{ maxHeight: '64px', display: 'flex', alignItems: 'center', justifyItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
			<Box sx={{ position: 'relative', width: '72px' }}>
				<Box sx={{ position: 'absolute', top: '-20px', left: '18px' }}>
					<a href="/">
						<img src={logo} width='64px' />
					</a>
				</Box>
			</Box>
			<Box className="company-name" sx={{ mx: '20px' }}>
				<a href="/">
					<Typography className="company-name" noWrap>
						DRAFT CHECK AU
					</Typography>
				</a>
			</Box>
			<Box sx={{ flexGrow: 1 }} />
			<Toolbar className="custom-toolbar" maxHeight='50px'>
				<NormalTextButton component="a" href="/about" variant='text' className='menu-button'>
					About
				</NormalTextButton>
				<NormalTextButton component="a" href="/examples" variant='text' className='menu-button' startIcon={<FileOpenIcon />}>
					Examples
				</NormalTextButton>
				<NormalTextButton className='menu-button' endIcon={<KeyboardArrowDownIcon />} onClick={handleClick}>
					Services
				</NormalTextButton>
				<StyledMenu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					className='service-menu'>
					<MenuItem component="a" href="/services/steel-detailing" className='service-menu-item' onClick={handleClose} disableRipple>
						<ArrowRightIcon />
						STEEL DETAILING CHECKING
					</MenuItem>
					<MenuItem component="a" href="/services/construction-drawings" className='service-menu-item' onClick={handleClose} disableRipple>
						<ArrowRightIcon />
						CONSTRUCTION DRAWING CHECKING
					</MenuItem>
					<MenuItem component="a" href="/services/manufacturer-optimisations" className='service-menu-item' onClick={handleClose} disableRipple>
						<ArrowRightIcon />
						MATERIAL OPTIMISATION (for Manufcaturers)
					</MenuItem>
				</StyledMenu>
				<NormalTextButton component="a" href="/api" variant='text' className="menu-button">
					API
				</NormalTextButton>
				<NormalTextButton component="a" href="/careers" variant='text' className="menu-button">
					Careers
				</NormalTextButton>
				<NormalTextButton component="a" href="/contact" variant='text' className="menu-button">
					Contact
				</NormalTextButton>
				<Box className="try-ai-button-border" sx={{ ml: 2 }}>
					<Button component="a" href="/ai-checker" variant="contained" className="try-ai-button" sx={{ padding: '3px 20px' }} startIcon={<PsychologyIcon />}>
						A.I. CHECKER
					</Button>
				</Box>
			</Toolbar>
		</Stack>
	);
};

export default ToolbarComponent;
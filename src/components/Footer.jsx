import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material';
import './Footer.css';

function FooterComponent() {
	return (
		<Box sx={{ display: 'flex', maxHeight: '50px', minHeight: '50px', overflow: 'hidden', background: '#000' }}>
			<Box className='left-box' sx={{ ml: 1, pt: 1, alignItems: 'center' }}>
				<Typography className='white-text'>
					© 2023 Draft Check WA Inc. All rights reserved. | Brand Assets
				</Typography>
				<Stack className='link-container' direction='row' spacing={2}>
					<Link className='white-link' href='/terms-of-service'>
						<Typography className='white-text'>
							Terms of Service
						</Typography>
					</Link>
					<Link className='white-link' href='/privacy-policy'>
						<Typography className='white-text'>
							Privacy Policy
						</Typography>
					</Link>
				</Stack>
			</Box>
			<Box sx={{ flexGrow: 1 }} />
			<Stack className='right-box' direction='row' spacing={2} sx={{ mr: 4, pt: 1 }}>
				<Link className='white-link' href='http://www.facebook.com' target='_blank'>
					<Typography className='white-link'>
						FACEBOOK
					</Typography>
				</Link>
				<Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: '#fff' }} />
				<Link className='white-link' href='http://www.youtube.com' target='_blank'>
					<Typography className='white-link'>
						YOUTUBE
					</Typography>
				</Link>
				<Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: '#fff' }} />
				<Link className='white-link' href='https://mastodon.social' target='_blank'>
					<Typography className='white-link'>
						MASTODON
					</Typography>
				</Link>
			</Stack>
		</Box>
	);
}

export default FooterComponent;
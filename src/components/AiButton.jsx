import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import PsychologyIcon from '@mui/icons-material/Psychology';
import './AiButton.css';

function AiCheckerButton() {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRed((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const messageColorClass = isRed ? 'red-color' : 'orange-color';

  return (
    <Box className='button-container' sx={{ display: 'flex'}}>
      <Button 
        component="a" href="/ai-checker"
        variant='contained'
        className='try-ai-button'
        startIcon={
          <SvgIcon 
            component={PsychologyIcon} 
            style={{
              transform: 'scale(2.5)',
              padding: '2px 8px'
            }}
          />
        } 
      >
        A.I. DRAWING CHECK
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography className={`ai-button-message ${messageColorClass}`} sx={{lineHeight: 0.75 }}>
            &nbsp; &lt; TRY OUR A.I. CHECKER
        </Typography>
        <Typography className={`ai-button-message-inner ${messageColorClass}`} sx={{ ml: 2, lineHeight: 0.75 }}>(TRY FOR FREE IN LESS THAN A MINUTE)</Typography>
      </Box>
    </Box>
  );
}

export default AiCheckerButton;
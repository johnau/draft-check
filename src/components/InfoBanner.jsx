import { Box, Divider, Typography } from '@mui/material';
import './InfoBanner.css';
import { useState, useEffect } from 'react';

const infoList = [
  { text: 'We have outsourced all of our checking needs to Draft Check WA as they consistently save us time and money', author: 'John Smith (Manager @ New Builds)' },
  { text: 'We are excited to partake in the AI revolution and work with Draft Check WA and their developing technologies', author: 'Bob (Manager @ Bobs Builds)' },
  { text: 'We used Draft Check AU when our offices were overloaded with work during the COVID-19 period and not only saved time but was also able to fix problems that may have otherwise slipped through the cracks', author: 'Peter Jones (Manager @ Build WA)' },
];

function InfoBanner() {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => (prev + 3));

      // If the first message is off-screen, reset position and move it to the end
      if (pos >= infoList[0].text.length * 2) {
        setPos(0);
        infoList.push(infoList.shift());
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='horizontal-line' />
      <Box sx={{ width: '100vw', overflow: 'hidden' }}>
        <Box className="content-box" sx={{ minHeight: 70, display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
          {infoList.map((info, index) => (
            <Box sx={{
              display: 'flex',
              transition: 'transform 1s ease-in-out',
              transform: `translateX(-${pos}px)`,
            }} key={index}>
              <Typography
                className="content-text"
                fontSize={20}
                fontStyle={'italic'}
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  whiteSpace: 'nowrap',
                  mr: 5,
                }}
              >
                &quot;{info.text}&quot;
                <Typography className='content-author' fontStyle={'normal'}>
                  &nbsp; - {info.author}
                </Typography>
              </Typography>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: '#fff', mr: 4 }} />
            </Box>
          ))}
        </Box>
      </Box>
      <div className='horizontal-line' />
    </>
  );
}

export default InfoBanner;
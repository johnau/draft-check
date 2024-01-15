import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import './TaglineDisplay.css';

const options = [
    "saves money.",
    "saves time.",
    "is essential.",
]

// const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
const characters = "abcdefghijklmnopqrstuvwxyz";
const randomChar = () => characters.charAt(Math.floor(Math.random() * characters.length));
const randomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length));
const randomCharFromString2 = (str) => str.replace(/\s/g, '').charAt(Math.floor(Math.random() * str.length));
const binaryString = (num) => num.toString(2).padStart(12, '0');
const trimString = (str, maxLength) => str.length > maxLength ? str.slice(0, maxLength) : str;

function arraysAreEqual(array1, array2) {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
}

function TaglineDisplayComponent() {
    const [idx, setIdx] = useState(0);
    const [rollingTicker, setRollingTicker] = useState(0);
    const [rollingText, setRollingText] = useState(options[0]);
    const [lastChange, setLastChange] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRollingTicker((prev) => prev + 1);
        }, 10); // editing this changes speed of the animation
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (rollingTicker > 200) {
            setLastChange(0);
            setRollingTicker(0);
            setIdx((prev) => (prev + 1) % options.length);
            return;
        }

        var currentChars = [...rollingText];
        var newChars = [...options[idx]];
        if (rollingTicker < 40 && rollingTicker > lastChange + 1) {
            currentChars.pop();

            setRollingText(currentChars.join(''));
            setLastChange(rollingTicker);
        } else if (rollingTicker > 40 && rollingTicker > lastChange + (1.05 * currentChars.length)) {
            var l = currentChars.length;
            if (newChars[l] !== undefined) {
                currentChars[l] = newChars[l];
                setRollingText(currentChars.join(''));
                setLastChange(rollingTicker);
            }
        }
    }, [rollingTicker, idx]);

    return (
        <>
            <Box className="tagline-text-box" sx={{ pb: 3 }}>
                <Typography className="tagline-text" align='left' sx={{lineHeight: 0.5}}>
                    Checking {rollingText}
                </Typography>
                <Typography className="tagline-text" align='left' sx={{lineHeight: 0.5, py: 6}}>
                    Let us be your second pair of eyes.
                </Typography>
            </Box>
        </>
    );
}

export default TaglineDisplayComponent;
import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../images/jasne.png';
import Background from '../images/background.avif';


const Home = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                '&:before': {
                    content: '""',
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "cover",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    opacity: 0.6
                }
            }}
        >
            <Box sx={{position:"relative"}}>
                <img width="350px" src={Logo} alt=""/>
            </Box>
        </Box>
    );
};

export default Home;
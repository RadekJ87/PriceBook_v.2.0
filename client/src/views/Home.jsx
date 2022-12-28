import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../images/jasne.png';
import Background from '../images/background.avif';
import {WallpaperDiv} from "../components/WallpaperDiv";


const Home = () => {
    return (
        <WallpaperDiv image={Background}>
            <Box sx={{position: "relative"}}>
                <img width="350px" src={Logo} alt=""/>
            </Box>
        </WallpaperDiv>
    );
};

export default Home;
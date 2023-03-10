import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";


export const CenteredDivWithWallpaper = styled(Box)(({ image }) => ({
    height: "100vh",
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '&:before': {
        content: '""',
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.6
    }
}));

const WallpaperDiv = ({children, image, width, height, position = "relative", top = "0%"}) => {
    return (
        <CenteredDivWithWallpaper image={image}>
            <Box sx={{
                width: {width},
                height: {height},
                position: {position},
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                top: {top}
                // top: position === "absolute" ? "10%" : "",
                // left: position === "absolute" ? "50%" : "",
                // transform: position === "absolute" ? "translateX(-50%)" : ""
            }}>
                {children}
            </Box>
        </CenteredDivWithWallpaper>
    );
};

export default WallpaperDiv;







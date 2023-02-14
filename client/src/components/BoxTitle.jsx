import React from 'react';
import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const StyledHeader = styled(Typography)(({theme}) => ({
    fontFamily: "Oswald",
    fontWeight: 400,
    letterSpacing: "1px",
    [theme.breakpoints.up('xs')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '22px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '24px',
    },
}));

const BoxTitle = ({title}) => {
    return (
        <StyledHeader
            component="h6"
            variant="h6"
        >
            {title}
        </StyledHeader>
    );
};

export default BoxTitle;
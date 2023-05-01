import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Toolbar, Box} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {MainContainer} from "./OptionsUsers";
import WallpaperDiv from "../components/WallpaperDiv";
import BoxTitle from "../components/BoxTitle";
import backgroundSingleUser from '../images/backgroundSingleUser.jpg';

const SingleUserPage = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const userId = pathname.split('/')[3];

    useEffect(() => {
        setIsLoading(true)
        const fetchUser = async () => {
            const res = await axios.get(`/options/manage-users/${userId}`)
            setUser(res.data);
            setIsLoading(false)
        }
        fetchUser().catch(console.error);

        return () => {
        };
    }, []);

    return (
        <WallpaperDiv image={backgroundSingleUser}>
                <MainContainer className="main-container">
                    <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                        <BoxTitle title={user?.username}/>
                        <Button
                            sx={{fontSize: {xs: '8px', sm: "10px", md: "12px", lg: "14px"}}}
                            variant="outlined"
                            startIcon={<ArrowBackIcon/>}
                            onClick={() => navigate(-1)}
                        >
                            Powrót
                        </Button>
                    </Toolbar>
                    <Box sx={{flex: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                        {/*Kontener do edycji uzytkownika*/}
                        {isLoading ? <p>loading user data...</p> : <p>Profil usera -> {user?.username}</p>}
                    </Box>
                </MainContainer>
            </WallpaperDiv>
    );
};

export default SingleUserPage;
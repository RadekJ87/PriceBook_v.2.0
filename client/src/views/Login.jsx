import React, {useState} from 'react';
import {Card, CardActions, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WallpaperDiv from "../components/WallpaperDiv";
import Laser from '../images/backgroundLogin.avif'
import Button from "@mui/material/Button";

const Login = () => {
    const [creditentials, setCreditentials] = useState({
        username: '',
        password: '',
    });

    const handleInputs = event => {
        setCreditentials({
            ...creditentials,
            [event.target.name]: event.target.value
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(creditentials);
    }


    return (
        <WallpaperDiv image={Laser}>
            <Card sx={{
                padding: "20px",
                width: {xs: 200, md: 330},
                height: {xs: 280, md: 380}
            }}>
                <CardContent sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <Box sx={{
                        margin: {xs: "0px", md: "15px 0"}
                    }}>
                        <Typography
                            variant="h4"
                            sx={{
                                textAlign: "center",
                                fontFamily: 'Oswald',
                                fontSize: {xs: "28px", md: "34px"},
                                fontWeight: 400,
                                textTransform: "uppercase",
                            }}>Zaloguj się</Typography>
                    </Box>
                    <Box
                        component="form"
                        onSubmit={handleLogin}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: {xs: "15px 0", md: "25px 0"}
                        }}
                    >
                        <Stack spacing={3} sx={{marginBottom: {xs: "30px", md: "50px"}}}>
                            <TextField required name="username" label="Nazwa użytkownika" variant="standard"
                                       onChange={handleInputs}/>
                            <TextField required name="password" label="Hasło" variant="standard" type="password"
                                       onChange={handleInputs}/>
                        </Stack>
                        <Button variant={"contained"} color={"primary"} size={"large"} type="submit">Zaloguj</Button>
                    </Box>
                </CardContent>
            </Card>
        </WallpaperDiv>
    );
};

export default Login;
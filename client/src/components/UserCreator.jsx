import React from 'react';
import {Badge, Box, Fab, FormControlLabel, Input, Switch} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Avatar from "@mui/material/Avatar";
import {styled} from "@mui/material/styles";
import BadgeInput, {SmallCameraIconBadge} from "./BadgeInput";

// test
const avatar = "https://randomuser.me/api/portraits/men/75.jpg";
// const avatar = "https://picsum.photos/id/237/200/300";
const badge = "https://randomuser.me/api/portraits/thumb/men/76.jpg";


const BigAvatar = styled(Avatar)(({ theme }) => ({
    width: 200,
    height: 200,
    backgroundSize: "cover",
    boxShadow: "4px 6px 15px 5px rgba(110,110,110,0.8)",
}));

const FormBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px",
    width: "55%",  //te dwa do skalowania
    height: "500px",
    backgroundColor: "rgba(7, 7, 12, 0.05)",
    border: "1px solid #cccccc",
    boxShadow: "2px 3px 10px 0px rgba(161,161,161,0.7)",
    transition: "all ease 0.2s",
    borderRadius: "5px",
    '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0px 10px 20px rgba(161,161,161,0.7)',
    }
}));

const UserCreator = () => {
    return (
        <Box className="form" sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "10px",
            width: "55%",  //te dwa do skalowania
            height: "500px",
            backgroundColor: "rgba(7, 7, 12, 0.05)",
            border: "1px solid #cccccc",
            boxShadow: "2px 3px 10px 0px rgba(161,161,161,0.7)",
            transition: "all ease 0.2s",
            borderRadius: "5px",
            '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: '0px 10px 20px rgba(161,161,161,0.7)',
            }
        }}>
            <Box className="wrapper"
                 sx={{
                     display: "flex",
                     flexDirection: "row",
                     // backgroundColor: "lightGreen",
                     height: "85%",
                 }}>
                <Box className="image-box" sx={{
                    display: "flex",
                    flex: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "darkGreen"
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "50%",
                        // backgroundColor: "red"
                    }}>
                        {/*<Input name="profilePicture" placeholder="input od uploadu zdjecia"/>*/}
                        {/*Zdjecie*/}
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={<BadgeInput badgeComponent={<SmallCameraIconBadge/>}/>}
                        >
                            <BigAvatar className="user" alt="Travis Howard" src={avatar} />
                        </Badge>
                    </Box>
                </Box>
                <Box className="data-box" sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "left",
                    // justifyContent: "space-around",
                    flex: 3,
                    // backgroundColor: "yellow"
                }}>
                    <Box sx={{
                        display: "flex",
                        flex: 4,
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 3,
                        '&>: not(style)': {
                            marginLeft: "10px",
                            width: "70%"}
                    }}>
                        <Input name="username" placeholder="Nazwa użytkownika"/>
                        <Input name="email" placeholder="Adres email"/>
                        <Input name="password" placeholder="Hasło"/>
                        <Box sx={{
                            // backgroundColor:"orange"
                        }}>
                            <FormControlLabel
                                control={
                                    <Switch checked={true} onChange={()=>console.log('switch')} name="admin" />
                                }
                                label="Czy dodać uprawienienia administratora?"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: 'flex', alignContent: "center", justifyContent: "flex-end"}}>
                <Fab variant="extended" size="small" color="success"
                     onClick={() => console.log('Add new')}>
                    <CheckCircleIcon sx={{mr: 1}}/>
                    Dodaj do bazy
                </Fab>
            </Box>
        </Box>
    );
};

export default UserCreator;
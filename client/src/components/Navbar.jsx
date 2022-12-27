import * as React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Brand from '../images/logo_jasne.png';
import {IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";


// do opcji menu poza auth
const pages = [
    {
        desc: 'Strona główna',
        url: "/"
    },
    {
        desc: 'Produkty',
        url: "/products"
    },
    {
        desc: 'Panel administratora',
        url: "/options"
    },
];

// dane testowe do user
const fakeUser = {
    username: 'John Doe',
    img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
}


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('Strona główna');
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [user, setUser] = React.useState(fakeUser);
    const [user, setUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const isActive = descritption => {
        return descritption === activeMenu;
    }


    // klasy 'mui-*' do usunięcia przy refactor
    return (
        <AppBar className="mui-header" sx={{position: "static", backgroundColor: "#fafafa"}}>
            <Container className="mui-container" maxWidth="xxl">
                <Toolbar className="mui-toolbar" disableGutters>
                    {/* widok dla desktop */}
                    <Box sx={{flex: 2, display: {xs: 'none', md: 'flex'}, justifyContent: "flex-start"}}>
                        <img width="70px" src={Brand} alt=""/>
                    </Box>
                    <Box sx={{
                        flex: 8,
                        display: {xs: 'none', md: 'flex'},
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                    }}>
                        {/*stworzyc komponent, aby nie duplikować stylowania*/}
                        {pages.map(page => (
                            <Button
                                onClick={() => setActiveMenu(page.desc)}
                                component={Link}
                                to={page.url}
                                key={page.desc}
                                sx={{my: 2, color: 'black', display: 'block', fontFamily: "Oswald", fontWeight: "200"}}
                            >
                                {isActive(page.desc) ?
                                    (<Typography sx={{fontWeight: 400, fontFamily: "Oswald", fontSize: "15px"}}>{page.desc}</Typography>)
                                    : page.desc}
                            </Button>

                        ))}
                        {!user ?
                            (<Button
                                component={Link}
                                to={`/login`}
                                sx={{my: 2, color: 'black', display: 'block', fontFamily: "Oswald", fontWeight: "200"}}
                            >
                                Logowanie
                            </Button>)
                            : (<Button
                                component={Link}
                                to={`/logout`}
                                sx={{my: 2, color: 'black', display: 'block', fontFamily: "Oswald", fontWeight: "200"}}
                            >
                                Wyloguj
                            </Button>)}
                    </Box>
                    {user ? (<Box sx={{
                        display: {xs: 'none', md: 'flex'},
                        flex: 2,
                        justifyContent: "flex-end",
                        alignItems: "center",
                        backgroundColor: "#eef1f4",
                        borderRadius: "27px",
                        '&:hover': {
                            color: '#0971f1',
                            backgroundColor: '#fafafa',
                        }
                    }}>
                        < Typography
                            variant="h6"
                            noWrap
                            component="p"
                            sx={{
                                mr: 2,
                                p: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'Roboto',
                                fontWeight: 400,
                                fontSize: "0.9rem",
                                letterSpacing: "1px",
                                color: "black",
                            }}
                        >
                            {user.username}
                        </Typography>
                        <Avatar sx={{marginRight: "10px"}} alt={user.username} src={user.img}/>
                    </Box>) : (<Box sx={{flex: 2}}></Box>)}

                    {/* widok dla mobile*/}

                    <Box className="mui-options-sm" sx={{flex: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                color: "black"
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    component={Link}
                                    to={page.url}
                                    key={page.desc}
                                    onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.desc}</Typography>
                                </MenuItem>
                            ))}
                            {user ?
                                (<MenuItem
                                    component={Link}
                                    to={'/logout'}
                                    onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Wyloguj</Typography>
                                </MenuItem>)
                                :
                                (<MenuItem
                                    component={Link}
                                    to={'/login'}
                                    onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Logowanie</Typography>
                                </MenuItem>)}
                        </Menu>
                    </Box>
                    <Box sx={{flex: 5, display: {xs: 'flex', md: 'none'}, justifyContent: "flex-start"}}>
                        <img width="40px" src={Brand} alt=""/>
                    </Box>
                    {user ? (<Box className="mui-user-sm" sx={{
                        display: {xs: 'flex', md: 'none'},
                        flex: 100,
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}>
                        < Typography
                            variant="p"
                            noWrap
                            component="p"
                            sx={{
                                mr: 2,
                                p: 1,
                                display: {xs: 'flex', md: 'none'},
                                fontFamily: 'Roboto',
                                fontWeight: 400,
                                fontSize: "0.7rem",
                                letterSpacing: "1px",
                                color: "black",
                            }}
                        >
                            {user.username}
                        </Typography>
                        <Avatar sx={{marginRight: "10px"}} alt={user.username} src={user.img}/>
                    </Box>) : (<Box sx={{
                        flex: 100,
                        display: {xs: 'flex', md: 'none'},
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }}>
                        < Typography
                            variant="p"
                            noWrap
                            component="p"
                            sx={{
                                mr: 2,
                                p: 1,
                                display: {xs: 'flex', md: 'none'},
                                fontFamily: 'Roboto',
                                fontWeight: 400,
                                fontSize: "0.7rem",
                                letterSpacing: "1px",
                                color: "black",
                            }}
                        >
                            Proszę się zalogować
                        </Typography>
                        <Avatar sx={{marginRight: "10px"}} alt="?">?</Avatar>
                    </Box>)}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
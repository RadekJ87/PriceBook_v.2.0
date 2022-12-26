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

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [user, setUser] = React.useState(fakeUser);
    // const [user, setUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


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
                        gap: "20px",
                    }}>
                        {/*stworzyc komponent, aby nie duplikować stylowania*/}
                        {pages.map(page => (
                            <Button
                                component={Link}
                                to={page.url}
                                key={page.desc}
                                sx={{my: 2, color: 'black', display: 'block', fontFamily: "Oswald", fontWeight: "200"}}
                            >
                                {page.desc}</Button>
                        ))}
                        {!user ?
                            (<Button
                                component={Link}
                                to={`/login`}
                                sx={{my: 2, color: 'black', display: 'block', fontFamily: "Oswald", fontWeight: "200"}}
                            >
                                Zaloguj
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
                    {/*todo*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
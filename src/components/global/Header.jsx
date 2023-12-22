import React, { useState } from 'react'
import { Box } from '@mui/system'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [submenuAnchor, setSubmenuAnchor] = React.useState({});
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    
    const pages = ['Our Company', 'Solutions', 'Resources', 'Partnership'];
    const router = useRouter();
    const submenuItems = {
        'Our Company': [
            { label: 'Why eSpark Talent', link: '/what-we-do', icon: '/icons/our-company-icon.png', description: 'Description for Why eSpark Talent' },
            { label: 'How it Works', link: '/how-it-works', icon: '/icons/how-it-works-icon.png', description: 'Description for How it Works' },
        ],
        'Solutions': [
            { label: 'Enterprise', link: '/for-enterprise', icon: '/icons/enterprise-icon.png', description: 'Description for Enterprise' },
            { label: 'Start-Ups', link: '/for-startup', icon: '/icons/startups-icon.png', description: 'Description for Start-Ups' },
        ],
        'Resources': [
            { label: 'Blogs', link: '/blogs', icon: '/icons/blogs-icon.png', description: 'Description for Blogs' },
            { label: 'eSparkWiki', link: '/wiki', icon: '/icons/wiki-icon.png', description: 'Description for eSparkWiki' },
            { label: 'Career', link: '/careers', icon: '/icons/career-icon.png', description: 'Description for Career' },
        ],
        'Partnership': [
            { label: 'Partnership Program', link: '/partnership', icon: '/icons/partnership-icon.png', description: 'Description for Partnership Program' },
        ],
    };
    // const handleSubmenuItemClicked = (link) => {
    //     router.push(link);
    //     handleCloseUserMenu();
    // };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    const handleOpenUserMenu = (event, page) => {
        setAnchorElUser(event.currentTarget);
        setSubmenuAnchor((prev) => ({ ...prev, [page]: event.currentTarget }));
        setSelectedMenuItem(null);
    };

    const handleSubmenuItemClicked = (menuItem) => {
        setSelectedMenuItem(menuItem);
        handleCloseUserMenu();
        router.push(menuItem.link);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setSubmenuAnchor({});
    };
    return (
        <Box>
            <AppBar position="static" sx={{ background: '#fff' }}>
                <Container>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Image
                            src={'/logo.png'}
                            width={100}
                            height={49}
                        />

                        <Box sx={{ display: { xs: 'flex', md: 'none' }, order: { xs: 2, md: 1 } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="primary"
                                sx={{
                                    '&:hover': { background: 'none' },
                                }}
                            >
                                <MenuIcon sx={{ width: '50px', height: '50px', color: '#001C63' }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
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
                                    display: { left: 0, xs: 'block', md: 'none', width: '100%' },
                                }}
                                className='menuResponsive'
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ width: '100vw !important' }}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                                <Button
                                    onClick={handleOpenUserMenu}
                                    size='small' sx={{
                                        border: '1.145px solid #222',
                                        borderRadius: '5.727px',
                                        '&:hover': {
                                            background: "#029894",
                                            color: '#fff',
                                            border: '1.145px solid #029894'

                                        },
                                        color: '#222',
                                        textAlign: 'center',
                                        fontSize: '17.766px',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        lineHeight: '27.49px',
                                        padding: '11px 20px 9px 20px',
                                        alignItems: 'center'
                                    }}>
                                    Hire a Talent
                                </Button>
                            </Menu>

                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'red',
                                textDecoration: 'none',
                            }}
                        >
                            LOGOsdfsadfasf
                        </Typography> */}

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                ml: { lg: '46px' },
                            }}
                        >
                            {pages.map((page) => (
                                <React.Fragment key={page}>
                                    <Button
                                        onClick={(event) => handleOpenUserMenu(event, page)}
                                        sx={{
                                            my: 2,
                                            mx: 2,
                                            color: '#222',
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 600,
                                            lineHeight: '21.766px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            '&:hover': { background: 'none' },
                                        }}
                                    >
                                        {page}
                                        <Image
                                            src={'/arrow.svg'}
                                            width={13}
                                            height={7}
                                            style={{ marginLeft: '5px' }}
                                        />
                                    </Button>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        anchorEl={submenuAnchor[page]}
                                        open={Boolean(submenuAnchor[page])}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {submenuItems[page].map((submenuItem) => (
                                            <MenuItem
                                                key={submenuItem.label}
                                                onClick={() => handleSubmenuItemClicked(submenuItem)}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Image
                                                        src={submenuItem.icon}
                                                        width={30}
                                                        height={30}
                                                        style={{ marginRight: '10px' }}
                                                    />
                                                    <div>
                                                        <Typography variant="subtitle1">{submenuItem.label}</Typography>
                                                        <Typography variant="body2">{submenuItem.description}</Typography>
                                                    </div>
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </React.Fragment>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, }}>
                            {/* <Tooltip title="Open settings"> */}
                            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton> */}
                            <Button
                                onClick={handleOpenUserMenu}
                                size='small' sx={{
                                    border: '1.145px solid #222',
                                    borderRadius: '5.727px',
                                    '&:hover': {
                                        background: "#029894",
                                        color: '#fff',
                                        border: '1.145px solid #029894'

                                    },
                                    color: '#222',
                                    textAlign: 'center',
                                    fontSize: '17.766px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '27.49px',
                                    padding: '11px 20px 9px 20px',
                                    alignItems: 'center'
                                }}>
                                Hire a Talent
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header

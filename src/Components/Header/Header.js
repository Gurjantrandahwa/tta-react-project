import React, {useState} from 'react';
import {AppBar, Box, Container, IconButton, Link, Menu, MenuItem, Typography} from "@mui/material";
import {ListAlt} from "@mui/icons-material";


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return <AppBar position="static" sx={{
        bgcolor: "#9EDDFF",
        color: "#363333",
        boxShadow: "inherit"
    }}>
        <Container maxWidth={"xl"}>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                // px={8}
                py={2}>
                <Typography variant="h5" fontWeight={"bolder"} fontFamily={"monospace"}>
                    <Link href={"/"} sx={{textDecoration:"none"}}>
                        Our Forests
                    </Link>

                </Typography>
                <IconButton
                    sx={{
                        color: "#363333"
                    }}

                    onClick={handleMenuClick}
                >
                    <ListAlt/>
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}

                >
                    <MenuItem onClick={handleMenuClose}><Link href={"/"}>Home</Link></MenuItem>
                    <MenuItem onClick={handleMenuClose}><Link href={"/aboutUs"}>About Us</Link></MenuItem>
                    <MenuItem onClick={handleMenuClose}><Link href={"/contactUs"}>Contact Us</Link></MenuItem>
                </Menu>
            </Box>
        </Container>


    </AppBar>
};

export default Header;

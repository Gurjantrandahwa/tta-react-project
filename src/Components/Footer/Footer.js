import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Box, Container, Link} from "@mui/material";

const Footer = () => {
    return <Box sx={{
        mt: 8,
        bgcolor: "#9EDDFF",
        py: 4,
        color:"#363333"
    }}>
        <Container maxWidth={"xl"}>
            <Grid container spacing={2} justifyContent={"space-between"}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" fontWeight={"bolder"} fontFamily={"monospace"} >
                        <Link href={"/"} sx={{textDecoration:"none"}}>
                            Our Forests
                        </Link>
                    </Typography>
                </Grid>


                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle1" color={"error"} fontWeight={"bolder"}>Our Services</Typography>
                    <ul>
                        <li><Link href={"/service1"}>Service 1</Link></li>
                        <li><Link href={"/service2"}>Service 2</Link></li>
                        <li><Link href={"/service1"}>Service 3</Link></li>

                    </ul>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="subtitle1" color={"error"} fontWeight={"bolder"}>Our pages</Typography>
                    <ul>
                        <li><Link href={"/contactUs"}>Contact Us</Link></li>
                        <li><Link href={"/aboutUs"}>About Us</Link></li>
                        <li><Link href={"/terms"}>Terms and Conditions</Link></li>

                    </ul>
                </Grid>
            </Grid>
        </Container>

    </Box>
};

export default Footer;

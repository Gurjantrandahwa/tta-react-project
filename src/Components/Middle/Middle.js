import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import banner from "../../assets/banner.jpg"

const MiddleSection = () => {


    return <Container maxWidth={"xl"} sx={{mt:8}}>
        <Grid container spacing={4} alignItems={"center"}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h4" gutterBottom color={"primary"} fontWeight={"bold"}>
                    Welcome to Our Website
                </Typography>
                <Typography variant="body2" fontWeight={"500"} color={"text.primary"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    gravida urna quis ligula molestie, non eleifend libero finibus.
                    Vestibulum euismod sem ac nisl tristique, in cursus urna vulputate.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img
                    className={""}
                    src={banner}
                    alt="banner"
                />
            </Grid>
        </Grid>
    </Container>
};

export default MiddleSection;

import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";

const AboutUs = () => {
    return <Container maxWidth={"xl"} sx={{height:"40vh"}}>
        <Grid container spacing={2} mt={8}>
            <Grid item xs={12}>
                <Typography align={"center"} variant={"h4"} color={"primary"} fontWeight={"bold"}>About Us</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.
                    Aenean eu est non lacus lacinia semper. Aenean tristique justo non
                    mauris aliquam ultrices. Cras fermentum odio eu feugiat pretium. Donec
                    vitae eros tristique, consequat ligula ut, suscipit orci. Ut
                    sollicitudin cursus mi, ut volutpat purus commodo quis.
                </Typography>
            </Grid>
        </Grid>
    </Container>
};

export default AboutUs;

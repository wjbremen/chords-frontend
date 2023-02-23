import { Card, CardContent, Grid, Typography} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function ChordDisplay(props){
    console.log("props.windowWidth: " + props.windowWidth); 

    if(props.windowWidth < 1000){
        return (
            <Box sx = {{margin: "auto", width : "200px"}}>
                <p>With less than 1000 px</p>
            </Box>
        ); 
    } else {
        return (
            <Grid container spacing = {2}>
               <Grid item xs = {2}>
                </Grid> 
                <Grid item xs = {10}>
                    <Card sx = {{width: "80%", height: "400px", margin: "50px"}} elevation = {12} >
                    <CardContent>
                        <Typography>
                        This is the large chord display
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}
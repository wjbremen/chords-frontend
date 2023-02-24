import { Card, CardContent, Grid, Typography } from "@mui/material";
import ChordDiagram from "./ChordDiagram";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

export default function ChordCard(props) {
    //props - name (string)

    return (
        <Card sx = {{ height: "200px", margin: "20px"
        }} elevation = {4}>
            <CardContent>
            <Grid container spacing = {2}>
                <Grid item xs = {8}>
                    <RadioButtonUncheckedOutlinedIcon sx = {{color: "grey" }} fontSize = "small" />
                </Grid>
                <Grid item xs = {4}>
                    <PlayCircleFilledWhiteOutlinedIcon sx = {{color: "red", opacity: 0.8 }} fontSize = "large"/>         
                </Grid>
            </Grid>
            
             
                <Typography variant = "h6">
                    {props.name}
                </Typography>
                <Grid container spacing = {1}>
                    <Grid item xs = {10}>
                        <ChordDiagram 
                        tuning = {["E","A","D","G","B","E"]}
                        chord = {["mute",48,52,"open",60,"open"]}
                        leftyOrRighty = {"right"}
                        width = {120}
                        />
                    </Grid>
                    <Grid item xs = {2}>    

                    </Grid>
                    <Grid item xs = {12}>
                        <BorderColorOutlinedIcon />
                    </Grid>

                </Grid>
                
            </CardContent>
        </Card>
    );
}
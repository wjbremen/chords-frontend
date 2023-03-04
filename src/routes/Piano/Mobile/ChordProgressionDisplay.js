import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import EditIcon from '@mui/icons-material/Edit';

export default function ChordProgressionDisplay(props){
    //props displayHeight, 
    //navbarHeight, 
    //screenWidth
    //selectedKey

    let headingFontSize = "10px"; 

    ///LATER: FIND A WAY TO REMOVE SCROLLLBAR AND 
    // ADD > BUTTON TO SCROLL THROUGH CHORD PROGRESSION

    let chordBox = <Box sx = {{width : (props.screenWidth / 4) + "px", minWidth: (props.screenWidth / 4) + "px", display: "inline-block",color: "white", boxSizing: "border-box", border: "1px solid grey"}}> item</Box>; 
    let chordBoxes = []; 
    for(let i = 1; i <= 8; i++){
        chordBoxes.push(chordBox); 
    }

    return (
        <>
        <NavigateNextIcon sx = {{color: "grey", position: "absolute", top: (props.navbarHeight + 0.34* props.displayHeight) + "px", right : "10px" }} /> 
        <NavigateBeforeIcon sx = {{color: "grey" , position: "absolute", top:(props.navbarHeight + 0.34 * props.displayHeight) + "px", left: "10px" }} />
        <Box sx = {{backgroundColor: "rgb(205, 209, 206)", marginTop: (props.navbarHeight) + "px", height: props.displayHeight + "px"}}>
            <Grid container>
                <Grid item xs = {6}>
                    <Typography sx = {{textAlign: "center", color: "white", fontSize : headingFontSize}}>Chord Progression</Typography>
                </Grid>
                <Grid item xs = {3}>
                    <Typography sx = {{fontSize: headingFontSize}}>Key: {props.selectedKey}</Typography> 
                </Grid>
                <Grid item xs = {3}>
                    <Typography sx = {{fontSize: headingFontSize, textAlign:"center", display: "inline-block", paddingRight: "5px"}}>Edit </Typography>
                    <EditIcon sx = {{fontSize : headingFontSize, display: "inline-block", textAlign: "center"}} />
                </Grid>
            </Grid>
            <Box sx = {{ overflow: "auto", whiteSpace:"nowrap", paddingBottom: "20px" ,margin: "0 10% 0 10%"}}>
                {chordBoxes}
            </Box>
        </Box>
        </>
    );
}
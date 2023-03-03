import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateBefore from "@mui/icons-material/NavigateBefore";

export default function ChordProgressionDisplay(props){
    //props displayHeight, navbarHeight, screenWidth

    ///LATER: FIND A WAY TO REMOVE SCROLLLBAR AND 
    // ADD > BUTTON TO SCROLL THROUGH CHORD PROGRESSION

    let chordBox = <Box sx = {{width : (props.screenWidth / 4) + "px", minWidth: (props.screenWidth / 4) + "px", display: "inline-block",color: "white"}}> item</Box>; 
    let chordBoxes = []; 
    for(let i = 1; i <= 8; i++){
        chordBoxes.push(chordBox); 
    }

    return (
        <>
        <NavigateNextIcon sx = {{position: "absolute", top: (props.navbarHeight + 0.5 * props.displayHeight) + "px", right : "10px" }} /> 
        <NavigateBeforeIcon sx = {{position: "absolute", top:(props.navbarHeight + 0.5 * props.displayHeight) + "px", left: "10px" }} />
        <Box sx = {{backgroundColor: "rgb(205, 209, 206)", marginTop: (props.navbarHeight) + "px", height: props.displayHeight + "px"}}>
            <Typography sx = {{color: "white"}}>Chord Progression</Typography>
            <Box sx = {{ overflow: "auto", whiteSpace:"nowrap", paddingBottom: "20px" }}>
                {chordBoxes}
            </Box>
        </Box>
        </>
    );
}
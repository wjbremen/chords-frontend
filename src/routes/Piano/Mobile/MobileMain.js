import { Fab, Grid, Paper, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";
import { Box, Stack } from "@mui/system";
import AddChordButton from "./AddChordButton";
import TopNav from "./TopNav";
import ChordProgressionDisplay from "./ChordProgressionDisplay";


export default function MobileMain(props){
    /////props: screenHeight, screenWidth

    //////////////////////////////////////////
    ////// Fixed Bottom Chord Player ////////
    /////////////////////////////////////////
    let [chords, setChords] = useState([]);

    let fixedBottomHeight = props.screenHeight/4;
    let box = <Paper elevation = {3} sx = {{boxSizing: "border-box", padding: "10px" , display: "inline-block", height: (fixedBottomHeight/2) + "px", width: (props.screenWidth/4) + "px", minWidth:(props.screenWidth/4) + "px" }}> item </Paper> ; 
    let textBox = <Box sx = {{height: (fixedBottomHeight/3)+"px", zIndex: 1, }}> 
        <Grid container >
            <Grid item xs = {6}>
                <Typography sx = {{textAlign: "center"}}>Chord Progression</Typography>
            </Grid>
            <Grid item xs = {3}>
                <Typography>Add Chord</Typography>
                
            </Grid>
            <Grid item xs = {3}>
                <AddCircleIcon />
            </Grid>
        </Grid>
    </Box>; 
     
    let fixedBottomStyle = {
        position: "fixed", 
        bottom: 0,
        left: 0,
        right: 0,
        height: `${fixedBottomHeight}px`,
    }; 
    
    let fixedBottomIconHeight = fixedBottomHeight/4; 
    let fixedBottomIconPadding = fixedBottomHeight/8;
    let fixedBottomIconStyles = {
        fontSize: fixedBottomIconHeight + "px", 
        paddingTop: fixedBottomIconPadding + "px"
    };

    let fixedBottomTextSize = fixedBottomHeight/8; 
    let fixedBottomTextStyles ={
        fontSize: fixedBottomTextSize,
    };

    /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    return(
        <>
        <TopNav navbarHeight = {props.screenHeight / 10} />
        <ChordProgressionDisplay displayHeight = {props.screenHeight /8} navbarHeight = {props.screenHeight/10} screenWidth = {props.screenWidth} />
        <div style ={{marginTop: (props.screenHeight/10) + "px"}}>
        <div> Mobile Screen </div>
        <div>props.screenWidth : {props.screenWidth}</div>
        <div>props.screenHeight: {props.screenHeight}</div>
        </div>
        {/*
        <Paper sx={{...fixedBottomStyle}} elevation={5}>   
        </Paper>
        */}
        <AddChordButton buttonHeight = {props.screenHeight / 10} />
        
        </>
    ); 
}
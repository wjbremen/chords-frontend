import { breadcrumbsClasses, Fab, Grid, Paper, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";
import { Box, Stack } from "@mui/system";
import AddChordButton from "./AddChordButton";
import TopNav from "./TopNav";
import ChordProgressionDisplay from "./ChordProgressionDisplay";
import ChordBrowswer from "./ChordBroswer";


export default function MobileMain(props){
    /////props: screenHeight, screenWidth, chordData 

    let [selectedKey, setSelectedKey] = useState(["C", "major"]); 

    //////////////////////////////////////////
    ////// Fixed Bottom Chord Player ////////
    /////////////////////////////////////////
    let [chordProgression, setChordProgression] = useState([]);

    let navbarHeight = props.screenHeight / 10; 
    let chordProgressionDisplayHeight = props.screenHeight /8 ;
    let browseButtonHeight =  props.screenHeight / 10;

    let [pageToDisplay, setPageToDisplay] = useState("chordBrowser"); 
    let [mainDisplay, setMainDisplay] = useState(null); 
    switch(pageToDisplay){
        case "chordBrowser": 
            mainDisplay =  (
                <ChordBrowswer 
                chordData = {props.chordData}
                navbarHeight = {navbarHeight} 
                chordProgressionDisplayHeight = {chordProgressionDisplayHeight}
                browseButtonHeight = {browseButtonHeight} 
                selectedKey = {selectedKey}
                setSelectedKey = {setSelectedKey} 
                /> ); 
            break; 
        default: 
            mainDisplay = (<div>not chord browser</div>); 
            break; 
    }
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    return(
        <>
        <TopNav navbarHeight = {navbarHeight} />
        <ChordProgressionDisplay
            displayHeight = {chordProgressionDisplayHeight} 
            navbarHeight = {navbarHeight}
            screenWidth = {props.screenWidth} 
            selectedKey = {selectedKey} 
        />
        {mainDisplay}
        
        <AddChordButton buttonHeight = {browseButtonHeight} />
        
        </>
    ); 
}
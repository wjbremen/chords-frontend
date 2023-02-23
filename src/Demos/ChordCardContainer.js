import { Grid } from "@mui/material";
import ChordCard from "./ChordCard";
import { useContext } from "react";
import { widthAndHeightContext } from "./Main";

export default function ChordCardContainer(props){
    //props= chordsPerRow and isBurgerMenu
    //props- chords? [{name: "chord1"}, {chord2} ]
    const widthAndHeight = useContext(widthAndHeightContext); 

    //later chords will be sent via props 
    let chords = [{name : "Cmaj"}, {name : "Gmaj"}, {name: "Amaj"}, {name: "Bmin"}]; 

    let chordCards = chords.map( (chordObj, index) => {
        return ( <Grid item xs = {12/props.chordsPerRow}>
            <ChordCard name = {chordObj.name} key = {chordObj.name + "" + index}/> 
        </Grid>
        ); 
    });

    return(
        <>
        <Grid container spacing = {0}>
            {chordCards}
        </Grid>
        
        </>
    );
}
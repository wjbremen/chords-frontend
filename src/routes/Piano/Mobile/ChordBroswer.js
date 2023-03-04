import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Box } from "@mui/system";


export default function ChordBrowswer(props){
    //props: chordData = {props.chordData} 
    //navbarHeight = {navbarHeight}
    // chordProgressionDisplayHeight = 
    //{chordProgressionDisplayHeight} 
    // browseButtonHeight
    let margin  = props.navbarHeight + props.chordProgressionDisplayHeight + "px"; 

    let musicalKeyObjects = props.chordData["musicalKeyObjects"]; 
    console.log("props.chordData", props.chordData); 
    console.log("props.chordData[musicalKeyObjects[ ", props.chordData["musicalKeyObjects"]); 
    let chordsByRootObjects = props.chordData["chordsByRoot"]["chordsByRoot"]; 

    /////////////////////////////////////////////
    //construct chords by musical key accordion
    /////////////////////////////////////////////
    let musicalKeyAccordion = []; 
    for(let keyObject of musicalKeyObjects){
        //console.log("keyObject.key: ", keyObject.key);
        musicalKeyAccordion.push(<Accordion><AccordionSummary key = {keyObject.key}>{keyObject.key}</AccordionSummary><AccordionDetails>deets</AccordionDetails></Accordion>); 
    }

    ////////////////////////////////////////////
    ///// construct chords by root accordion ///
    ///////////////////////////////////////////
    let chordsByRootAccordion = []; 
    for(let rootObject of chordsByRootObjects){
        let noteString = null; 
        if(rootObject.rootLetter[1] == "b" || rootObject.rootLetter[1] == "#"){
            noteString = `${rootObject.rootLetter[0]}${rootObject.rootLetter[1]}`; 
        }
        else {
            noteString = `${rootObject.rootLetter[0]}`; 
        }
        chordsByRootAccordion.push(<Accordion><AccordionSummary>{noteString}</AccordionSummary><AccordionDetails>some deets</AccordionDetails></Accordion>); 
    }


    return(
        <>
        <Box sx = {{marginBottom: props.browseButtonHeight +"px"}}>
        <Accordion>
                <AccordionSummary>
                    Chords in key : {props.selectedKey}
                </AccordionSummary>
                <AccordionDetails>
                    {musicalKeyAccordion}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    Chords By Key
                </AccordionSummary>
                <AccordionDetails>
                    {musicalKeyAccordion}
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary>
                    Chords by root 
                </AccordionSummary>
                <AccordionDetails>
                    {chordsByRootAccordion}
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary>
                    Create chord freehand 
                </AccordionSummary>
                <AccordionDetails>
                    {chordsByRootAccordion}
                </AccordionDetails>
            </Accordion>
        </Box>
        </>
    ); 
}
import { useRef, useState } from "react";
import path52 from "./audioFiles/C.wav"; 
import path53 from "./audioFiles/E.wav"; 
import path54 from "./audioFiles/G.wav"; 

export function AudioFile(props){
    console.log("inside AudioFiles (singular)"); 
    let reactRef = useRef(null); 
    console.log("react ref ", reactRef);
    let refKey = (props.fileInfo.midiNote).toString();
    console.log("ref key: ", refKey); 
    console.log("type of set note ref: " , typeof props.setNoteRefs); 
    //props.setNoteRefs({...props.noteRefs, refKey: reactRef}); 
    props.noteRefs[refKey] = reactRef; 

    console.log("inside audio file (singular), noteRefs is now : ", props.noteRefs); 
    let srcPath = null; 
    switch(props.fileInfo.midiNote){
        case 52:
            srcPath = path52; 
            break; 
        case 53: 
            srcPath = path53; 
            break;
        case 54:
            srcPath = path54; 
            break
    }
    
    return(
         <audio src = {srcPath} data-isPlaying = {false} ref = {reactRef} data-midiNote = {props.fileInfo.midiNote} data-connected = {false}> </audio> 
    ); 
}

export default function AudioFiles(props){
    /* props audioFilesInfo = {audioFilesInfo}
     setNoteRefs = {setNoteRefs}
     */
    console.log("inside AudioFiles (plural)"); 
    console.log("props.audioFilesInfo: " , props.audioFilesInfo); 

 

    
    return (
    <>
    
    {props.audioFilesInfo.map( (info) => {
            return( 
                <AudioFile fileInfo = {info} setNoteRefs = {props.setNoteRefs} noteRefs = {props.noteRefs} /> 
            );  
        }
    )}
    </>    
    );
    
   
  
}
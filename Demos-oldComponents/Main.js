/*s
import { Drawer, Grid } from "@mui/material";
import { useEffect, useState, createContext, useContext, useRef } from "react";
import AppBarTop from "./AppBarTop";
import ChordCard from "./ChordCard";
import ChordCardContainer from "./ChordCardContainer";
import ChordDisplay from "./ChordDisplay";
import MobileLeftDrawer from "./MobileLeftDrawer";
import PersistentLeftDrawer from "./PersistentLeftDrawer";
import UndoButton from "./UndoButton";
import ChordDiagram from "./ChordDiagram";
import TestPlay from "./TestPlay";
import setUpAudioFilesPiano from "./setUpAudioFilesPiano";
import setUpAudioFilesGuitar from "./setUpAudioFilesGuitar";

export const widthAndHeightContext = createContext({width: 0, height: 0}); 

/*

export default function Main() {
    let audioObjects = setUpAudioFilesPiano(); 

    let [instrument, setInstrument] = useState("piano");

    useEffect(()=> {
        let validInstruments = ["guitar", "Guitar", "piano", "Piano"]; 
        if(validInstruments.includes(instrument)){
            if(instrument == "guitar" || instrument == "Guitar") {
                audioObjects = setUpAudioFilesGuitar(); 
            }
            if(instrument == "piano" || instrument == "Piano"){
                audioObjects = setUpAudioFilesPiano(); 
            }
        }
    }, [instrument]); 
    
    /*
    let startMidiNote = 52;
    let endMidiNote = 54;
    let fileNamePrefix = "piano"; 
    const audioFilesSetup = () => {
        */
        /*
        [ {midiNote: 52, fileName: "piano_52.wav", reactRef: .... },
        {midiNote: 53, fileName: "piano_53.wav", reactRef: .... } ] 
        */
       /*
        let filesInfo = [];
        for(let i = startMidiNote; i <= endMidiNote; i++){
            //const reactRef = useRef(null); 
            filesInfo.push( {midiNote: i, fileName: `./audioFiles/${fileNamePrefix}_${i}.wav`} ); 
        }

        return filesInfo; 
    }
    const [audioFilesInfo, setAudioFilesInfo] = useState(audioFilesSetup); 
    */
    
    
/*
    const noteRefsSetup = () => {
        console.log("noteRefsSetup called"); 
        let noteRefsObj = {};
        for(let i = startMidiNote; i <= endMidiNote; i++){
            noteRefsObj[i] = null; 
        }
        return noteRefsObj; 
    }
   // const [noteRefs, setNoteRefs] = useState(noteRefsSetup); 
   let noteRefs = noteRefsSetup(); 
   const setNoteRefs = (newObject) => {
        noteRefs = newObject; 
        console.log("setNoteRefs called, noteRefs now = ", noteRefs);
        
   }

   useEffect( () => {
        //noteRefs = noteRefsSetup(); 
   }, [audioFilesInfo]); 

*/

/*
   let [previouslyPlayed, setPreviouslyPlayed] = useState(null); 
   let [playNow, setPlayNow] = useState(null);


   const playNotes = (notesArray) => {
    if(previouslyPlayed){
        previouslyPlayed.forEach( midiNote => {
            audioObjects[midiNote].pause();
            audioObjects[midiNote].currentTime = 0; 
        });
    }
    

    setPreviouslyPlayed(playNow);
    setPlayNow(notesArray); 

    notesArray.forEach( midiNote => {
        audioObjects[midiNote].play(); 
    });  
}


    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let appBarMargin = "100px"; 

    useEffect(() => {
        function handleResize() {
            //console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight); 
        }
        window.addEventListener('resize', handleResize);
      });

      /*
    audioFilesInfo.forEach( info => {
        console.log( "audio file info: " , info); 
    }); 
    */
    
    //console.dir("noteRefs: ", noteRefs); 

    //md screen size and up (>=900 px) will show persistent left drawer
    //two chord cards per row and chord display
    //600 to 900px will show 2 chords per row and chord display and
    //mobile burger menu 
    //less than 600- one chord card per row, no chord display, burger menu
{/*
    if (windowWidth >= 900){
        return(
            <widthAndHeightContext.Provider  value = {{width: windowWidth, height: windowHeight}}>
                
                <AppBarTop isMobile = {false}/>
                <Grid container spacing = {0} sx = {{marginTop: appBarMargin}}>
                    
                        
                    
                    <Grid item xs = {2}>
                        <PersistentLeftDrawer />
                    </Grid>
                    <Grid item xs = {8}>
                         <ChordCardContainer chordsPerRow = {4} isBurgerMenu = {false}/>
                        { //props 
    //tuning - ["E","A","D","G","B","E"]- 1st string through 6th
    //chord - ["mute",54,60,72,"open","open"]- 1st string through 6th -1st is low E
    //leftyOrRighty - "left" or "right"
    //chord diagrams in general show five frets 
    //width - an int indicating number of px - width of the graphic will be greater than height 
    }
                         {/* <ChordDiagram 
                        tuning = {["E","A","D","G","B","E"]}
                        chord = {["mute",48,52,"open",60,"open"]}
                        leftyOrRighty = {"left"}
                        width = {400}
                        /> 

                        <ChordDiagram 
                        tuning = {["E","A","D","G","B","E"]}
                        chord = {["mute",48,52,"open",60,"open"]}
                        leftyOrRighty = {"right"}
                        width = {400}
                        />  */}
                    /*     
                        <TestPlay playNotes = {playNotes} /> 
                        <ChordDisplay />
                    </Grid>
                    <Grid item xs = {2}>
                        <UndoButton/>
                    </Grid>
                    
                </Grid>


                
                
            </widthAndHeightContext.Provider>
        );
    } 
    else if (windowWidth >= 600 && windowWidth < 900){
        return(
            <widthAndHeightContext.Provider  value = {{width: windowWidth, height: windowHeight}}>
                <AppBarTop isMobile = {true} />
                <Grid container spacing = {0} sx = {{marginTop: appBarMargin}}>
                    

                    <Grid item xs = {1}>
                        
                    </Grid>
                    <Grid item xs = {10}>
                        <ChordCardContainer chordsPerRow = {3} isBurgerMenu = {true}/>
                    </Grid>
                    <Grid item xs = {1}>
                        <UndoButton /> 
                    </Grid>
                    <Grid item xs = {1}>
                    
                    </Grid>
                    <Grid item xs = {10}>
                        <ChordDisplay />
                    </Grid>
                    <Grid item xs = {1}>
                    
                    </Grid>
                </Grid>
                
            </widthAndHeightContext.Provider>
        );
    } 
    else {
        //windowWidth < 600
        return(
            <widthAndHeightContext.Provider  value = {{width: windowWidth, height: windowHeight}}>
                <AppBarTop isMobile = {true} />

                <Grid container spacing = {0} sx = {{marginTop: appBarMargin}}>
                    <Grid item xs = {1}>

                    </Grid>
                    <Grid item xs = {10}>
                        <ChordCardContainer chordsPerRow = {1} isBurgerMenu = {true}/>
                    </Grid>
                    <Grid item xs = {1}>
                        <UndoButton />
                    </Grid>
                </Grid>
                
            </widthAndHeightContext.Provider>
        );
    } 
}

*/

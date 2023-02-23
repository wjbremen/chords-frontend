import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {useLoaderData} from "react-router-dom"; 

import midiNote21 from "../pianoAudioFiles/pianoMidiNote21.mp3"; 
import midiNote22 from "../pianoAudioFiles/pianoMidiNote22.mp3"; 
import midiNote23 from "../pianoAudioFiles/pianoMidiNote23.mp3"; 
import midiNote24 from "../pianoAudioFiles/pianoMidiNote24.mp3"; 
import midiNote25 from "../pianoAudioFiles/pianoMidiNote25.mp3"; 
import midiNote26 from "../pianoAudioFiles/pianoMidiNote26.mp3"; 
import midiNote27 from "../pianoAudioFiles/pianoMidiNote27.mp3"; 
import midiNote28 from "../pianoAudioFiles/pianoMidiNote28.mp3"; 
import midiNote29 from "../pianoAudioFiles/pianoMidiNote29.mp3"; 
import midiNote30 from "../pianoAudioFiles/pianoMidiNote30.mp3"; 
import midiNote31 from "../pianoAudioFiles/pianoMidiNote31.mp3"; 
import midiNote32 from "../pianoAudioFiles/pianoMidiNote32.mp3"; 
import midiNote33 from "../pianoAudioFiles/pianoMidiNote33.mp3"; 
import midiNote34 from "../pianoAudioFiles/pianoMidiNote34.mp3"; 
import midiNote35 from "../pianoAudioFiles/pianoMidiNote35.mp3"; 
import midiNote36 from "../pianoAudioFiles/pianoMidiNote36.mp3"; 
import midiNote37 from "../pianoAudioFiles/pianoMidiNote37.mp3"; 
import midiNote38 from "../pianoAudioFiles/pianoMidiNote38.mp3"; 
import midiNote39 from "../pianoAudioFiles/pianoMidiNote39.mp3"; 
import midiNote40 from "../pianoAudioFiles/pianoMidiNote40.mp3"; 
import midiNote41 from "../pianoAudioFiles/pianoMidiNote41.mp3"; 
import midiNote42 from "../pianoAudioFiles/pianoMidiNote42.mp3"; 
import midiNote43 from "../pianoAudioFiles/pianoMidiNote43.mp3"; 
import midiNote44 from "../pianoAudioFiles/pianoMidiNote44.mp3"; 
import midiNote45 from "../pianoAudioFiles/pianoMidiNote45.mp3"; 
import midiNote46 from "../pianoAudioFiles/pianoMidiNote46.mp3"; 
import midiNote47 from "../pianoAudioFiles/pianoMidiNote47.mp3"; 
import midiNote48 from "../pianoAudioFiles/pianoMidiNote48.mp3"; 
import midiNote49 from "../pianoAudioFiles/pianoMidiNote49.mp3"; 
import midiNote50 from "../pianoAudioFiles/pianoMidiNote50.mp3"; 
import midiNote51 from "../pianoAudioFiles/pianoMidiNote51.mp3"; 
import midiNote52 from "../pianoAudioFiles/pianoMidiNote52.mp3"; 
import midiNote53 from "../pianoAudioFiles/pianoMidiNote53.mp3"; 
import midiNote54 from "../pianoAudioFiles/pianoMidiNote54.mp3"; 
import midiNote55 from "../pianoAudioFiles/pianoMidiNote55.mp3"; 
import midiNote56 from "../pianoAudioFiles/pianoMidiNote56.mp3"; 
import midiNote57 from "../pianoAudioFiles/pianoMidiNote57.mp3"; 
import midiNote58 from "../pianoAudioFiles/pianoMidiNote58.mp3"; 
import midiNote59 from "../pianoAudioFiles/pianoMidiNote59.mp3";
import midiNote60 from "../pianoAudioFiles/pianoMidiNote60.mp3";
import midiNote61 from "../pianoAudioFiles/pianoMidiNote61.mp3";
import midiNote62 from "../pianoAudioFiles/pianoMidiNote62.mp3";
import midiNote63 from "../pianoAudioFiles/pianoMidiNote63.mp3";
import midiNote64 from "../pianoAudioFiles/pianoMidiNote64.mp3";
import midiNote65 from "../pianoAudioFiles/pianoMidiNote65.mp3";
import midiNote66 from "../pianoAudioFiles/pianoMidiNote66.mp3";
import midiNote67 from "../pianoAudioFiles/pianoMidiNote67.mp3";
import midiNote68 from "../pianoAudioFiles/pianoMidiNote68.mp3";
import midiNote69 from "../pianoAudioFiles/pianoMidiNote69.mp3";
import midiNote70 from "../pianoAudioFiles/pianoMidiNote70.mp3";
import midiNote71 from "../pianoAudioFiles/pianoMidiNote71.mp3";
import midiNote72 from "../pianoAudioFiles/pianoMidiNote72.mp3";
import midiNote73 from "../pianoAudioFiles/pianoMidiNote73.mp3";
import midiNote74 from "../pianoAudioFiles/pianoMidiNote74.mp3";
import midiNote75 from "../pianoAudioFiles/pianoMidiNote75.mp3";
import midiNote76 from "../pianoAudioFiles/pianoMidiNote76.mp3";
import midiNote77 from "../pianoAudioFiles/pianoMidiNote77.mp3";
import midiNote78 from "../pianoAudioFiles/pianoMidiNote78.mp3";
import midiNote79 from "../pianoAudioFiles/pianoMidiNote79.mp3";
import midiNote80 from "../pianoAudioFiles/pianoMidiNote80.mp3";
import midiNote81 from "../pianoAudioFiles/pianoMidiNote81.mp3";
import midiNote82 from "../pianoAudioFiles/pianoMidiNote82.mp3";
import midiNote83 from "../pianoAudioFiles/pianoMidiNote83.mp3";
import midiNote84 from "../pianoAudioFiles/pianoMidiNote84.mp3";
import midiNote85 from "../pianoAudioFiles/pianoMidiNote85.mp3";
import midiNote86 from "../pianoAudioFiles/pianoMidiNote86.mp3";
import midiNote87 from "../pianoAudioFiles/pianoMidiNote87.mp3";
import midiNote88 from "../pianoAudioFiles/pianoMidiNote88.mp3";
import midiNote89 from "../pianoAudioFiles/pianoMidiNote89.mp3";
import midiNote90 from "../pianoAudioFiles/pianoMidiNote90.mp3";
import midiNote91 from "../pianoAudioFiles/pianoMidiNote91.mp3";
import midiNote92 from "../pianoAudioFiles/pianoMidiNote92.mp3";
import midiNote93 from "../pianoAudioFiles/pianoMidiNote93.mp3";
import midiNote94 from "../pianoAudioFiles/pianoMidiNote94.mp3";
import midiNote95 from "../pianoAudioFiles/pianoMidiNote95.mp3";
import midiNote96 from "../pianoAudioFiles/pianoMidiNote96.mp3";




export default function Piano(){
    
    //let note21 = new Audio(midiNote21); 
    let [pianoNote21, setPianoNote21] = useState(new Audio(midiNote21));  
    let [pianoNote22, setPianoNote22] = useState(new Audio(midiNote22));  
    let [pianoNote23, setPianoNote23] = useState(new Audio(midiNote23));  
    let [pianoNote24, setPianoNote24] = useState(new Audio(midiNote24));  
    let [pianoNote25, setPianoNote25] = useState(new Audio(midiNote25));  
    let [pianoNote26, setPianoNote26] = useState(new Audio(midiNote26));  
    let [pianoNote27, setPianoNote27] = useState(new Audio(midiNote27));  
    let [pianoNote28, setPianoNote28] = useState(new Audio(midiNote28));  
    let [pianoNote29, setPianoNote29] = useState(new Audio(midiNote29));  
    let [pianoNote30, setPianoNote30] = useState(new Audio(midiNote30));  
    let [pianoNote31, setPianoNote31] = useState(new Audio(midiNote31));
    let [pianoNote32, setPianoNote32] = useState(new Audio(midiNote32));
    let [pianoNote33, setPianoNote33] = useState(new Audio(midiNote33));
    let [pianoNote34, setPianoNote34] = useState(new Audio(midiNote34));
    let [pianoNote35, setPianoNote35] = useState(new Audio(midiNote35));
    let [pianoNote36, setPianoNote36] = useState(new Audio(midiNote36));
    let [pianoNote37, setPianoNote37] = useState(new Audio(midiNote37));
    let [pianoNote38, setPianoNote38] = useState(new Audio(midiNote38));
    let [pianoNote39, setPianoNote39] = useState(new Audio(midiNote39));
    let [pianoNote40, setPianoNote40] = useState(new Audio(midiNote40));
    let [pianoNote41, setPianoNote41] = useState(new Audio(midiNote41));  
    let [pianoNote42, setPianoNote42] = useState(new Audio(midiNote42));  
    let [pianoNote43, setPianoNote43] = useState(new Audio(midiNote43));  
    let [pianoNote44, setPianoNote44] = useState(new Audio(midiNote44));  
    let [pianoNote45, setPianoNote45] = useState(new Audio(midiNote45));  
    let [pianoNote46, setPianoNote46] = useState(new Audio(midiNote46));  
    let [pianoNote47, setPianoNote47] = useState(new Audio(midiNote47));  
    let [pianoNote48, setPianoNote48] = useState(new Audio(midiNote48));  
    let [pianoNote49, setPianoNote49] = useState(new Audio(midiNote49));  
    let [pianoNote50, setPianoNote50] = useState(new Audio(midiNote50));    
    let [pianoNote51, setPianoNote51] = useState(new Audio(midiNote51));    
    let [pianoNote52, setPianoNote52] = useState(new Audio(midiNote52));    
    let [pianoNote53, setPianoNote53] = useState(new Audio(midiNote53));    
    let [pianoNote54, setPianoNote54] = useState(new Audio(midiNote54));    
    let [pianoNote55, setPianoNote55] = useState(new Audio(midiNote55));    
    let [pianoNote56, setPianoNote56] = useState(new Audio(midiNote56));    
    let [pianoNote57, setPianoNote57] = useState(new Audio(midiNote57));    
    let [pianoNote58, setPianoNote58] = useState(new Audio(midiNote58));    
    let [pianoNote59, setPianoNote59] = useState(new Audio(midiNote59));    
    let [pianoNote60, setPianoNote60] = useState(new Audio(midiNote60));    
    let [pianoNote61, setPianoNote61] = useState(new Audio(midiNote61));    
    let [pianoNote62, setPianoNote62] = useState(new Audio(midiNote62));    
    let [pianoNote63, setPianoNote63] = useState(new Audio(midiNote63));    
    let [pianoNote64, setPianoNote64] = useState(new Audio(midiNote64));    
    let [pianoNote65, setPianoNote65] = useState(new Audio(midiNote65));    
    let [pianoNote66, setPianoNote66] = useState(new Audio(midiNote66));    
    let [pianoNote67, setPianoNote67] = useState(new Audio(midiNote67));    
    let [pianoNote68, setPianoNote68] = useState(new Audio(midiNote68));    
    let [pianoNote69, setPianoNote69] = useState(new Audio(midiNote69));    
    let [pianoNote70, setPianoNote70] = useState(new Audio(midiNote70));    
    let [pianoNote71, setPianoNote71] = useState(new Audio(midiNote71));    
    let [pianoNote72, setPianoNote72] = useState(new Audio(midiNote72));    
    let [pianoNote73, setPianoNote73] = useState(new Audio(midiNote73));    
    let [pianoNote74, setPianoNote74] = useState(new Audio(midiNote74));    
    let [pianoNote75, setPianoNote75] = useState(new Audio(midiNote75));    
    let [pianoNote76, setPianoNote76] = useState(new Audio(midiNote76));    
    let [pianoNote77, setPianoNote77] = useState(new Audio(midiNote77));    
    let [pianoNote78, setPianoNote78] = useState(new Audio(midiNote78));    
    let [pianoNote79, setPianoNote79] = useState(new Audio(midiNote79));    
    let [pianoNote80, setPianoNote80] = useState(new Audio(midiNote80));
    let [pianoNote81, setPianoNote81] = useState(new Audio(midiNote81));
    let [pianoNote82, setPianoNote82] = useState(new Audio(midiNote82));
    let [pianoNote83, setPianoNote83] = useState(new Audio(midiNote83));
    let [pianoNote84, setPianoNote84] = useState(new Audio(midiNote84));
    let [pianoNote85, setPianoNote85] = useState(new Audio(midiNote85));
    let [pianoNote86, setPianoNote86] = useState(new Audio(midiNote86));
    let [pianoNote87, setPianoNote87] = useState(new Audio(midiNote87));
    let [pianoNote88, setPianoNote88] = useState(new Audio(midiNote88));
    let [pianoNote89, setPianoNote89] = useState(new Audio(midiNote89));
    let [pianoNote90, setPianoNote90] = useState(new Audio(midiNote90));
    let [pianoNote91, setPianoNote91] = useState(new Audio(midiNote91));
    let [pianoNote92, setPianoNote92] = useState(new Audio(midiNote92));
    let [pianoNote93, setPianoNote93] = useState(new Audio(midiNote93));
    let [pianoNote94, setPianoNote94] = useState(new Audio(midiNote94));
    let [pianoNote95, setPianoNote95] = useState(new Audio(midiNote95));
    let [pianoNote96, setPianoNote96] = useState(new Audio(midiNote96));    

    function noteSelector(noteNumber){
        let selectedNote = null; 
        switch(noteNumber){
            case 21:
                selectedNote = pianoNote21; 
                break;
            case 22:
                selectedNote = SetPianoNote22; 
                break;
            case 23:
                selectedNote = SetPianoNote23; 
                break;
            case 24:
                selectedNote = SetPianoNote24; 
                break;
            case 25:
                selectedNote = SetPianoNote25; 
                break;
            case 26:
                selectedNote = SetPianoNote26; 
                break;
            case 27:
                selectedNote = SetPianoNote27; 
                break;
            case 28:
                selectedNote = SetPianoNote28; 
                break;
            case 29:
                selectedNote = SetPianoNote29; 
                break;
            case 30:
                selectedNote = SetPianoNote30;  
                break;
            case 31:
                selectedNote = SetPianoNote31; 
                break;
            case 32:
                selectedNote = SetPianoNote32; 
                break;
            case 33:
                selectedNote = SetPianoNote33; 
                break;
            case 34:
                selectedNote = SetPianoNote34; 
                break;
            case 35:
                selectedNote = SetPianoNote35; 
                break;
            case 36:
                selectedNote = SetPianoNote36; 
                break;
            case 37:
                selectedNote = SetPianoNote37; 
                break;
            case 38:
                selectedNote = SetPianoNote38; 
                break;
            case 39:
                selectedNote = SetPianoNote39; 
                break;
            case 40:
                selectedNote = SetPianoNote40; 
                break;
            case 41:
                selectedNote = SetPianoNote41; 
                break;
            case 42:
                selectedNote = SetPianoNote42; 
                break;    
            case 43:
                selectedNote = SetPianoNote43; 
                break;
            case 44:
                selectedNote = SetPianoNote44; 
                break;
            case 45:
                selectedNote = SetPianoNote45; 
                break;
            case 46:
                selectedNote = SetPianoNote46; 
                break;
            case 47:
                selectedNote = SetPianoNote47; 
                break;
            case 48:
                selectedNote = SetPianoNote48; 
                break;
            case 49:
                selectedNote = SetPianoNote49; 
                break;
            case 50:
                selectedNote = SetPianoNote50; 
                break;
            case 51:
                selectedNote = SetPianoNote51; 
                break;
            case 52:
                selectedNote = SetPianoNote52; 
                break;
            case 53:
                selectedNote = SetPianoNote53; 
                break;   
            case 54:
                selectedNote = SetPianoNote54; 
                break;
            case 55:
                selectedNote = SetPianoNote55; 
                break;
            case 56:
                selectedNote = SetPianoNote56; 
                break;
            case 57:
                selectedNote = SetPianoNote57; 
                break;
            case 58:
                selectedNote = SetPianoNote58; 
                break;
            case 59:
                selectedNote = SetPianoNote59; 
                break;
            case 60:
                selectedNote = SetPianoNote60; 
                break;
            case 61:
                selectedNote = SetPianoNote61; 
                break;
            case 62:
                selectedNote = SetPianoNote62; 
                break;
            case 63:
                selectedNote = SetPianoNote63; 
                break;
            case 64:
                selectedNote = SetPianoNote64; 
                break;
            case 65:
                selectedNote = SetPianoNote65; 
                break;
            case 66:
                selectedNote = SetPianoNote66; 
                break;
            case 67:
                selectedNote = SetPianoNote67; 
                break;
            case 68:
                selectedNote = SetPianoNote68; 
                break;
            case 69:
                selectedNote = SetPianoNote69; 
                break;
            case 70:
                selectedNote = SetPianoNote70; 
                break;
            case 71:
                selectedNote = SetPianoNote71; 
                break;
            case 72:
                selectedNote = SetPianoNote72; 
                break;
            case 73:
                selectedNote = SetPianoNote73; 
                break;
            case 74:
                selectedNote = SetPianoNote74; 
                break;
            case 75:
                selectedNote = SetPianoNote75; 
                break;    
            case 76:
                selectedNote = SetPianoNote76; 
                break;
            case 77:
                selectedNote = SetPianoNote77; 
                break;
            case 78:
                selectedNote = SetPianoNote78; 
                break;
            case 79:
                selectedNote = SetPianoNote79; 
                break;
            case 80:
                selectedNote = SetPianoNote80; 
                break;
            case 81:
                selectedNote = SetPianoNote81; 
                break;
            case 82:
                selectedNote = SetPianoNote82; 
                break;
            case 83:
                selectedNote = SetPianoNote83; 
                break;
            case 84:
                selectedNote = SetPianoNote84; 
                break;
            case 85:
                selectedNote = SetPianoNote85; 
                break;
            case 86:
                selectedNote = SetPianoNote86; 
                break;   
            case 87:
                selectedNote = SetPianoNote87; 
                break;
            case 88:
                selectedNote = SetPianoNote88; 
                break;
            case 89:
                selectedNote = SetPianoNote89; 
                break;
            case 90:
                selectedNote = SetPianoNote90; 
                break;
            case 91:
                selectedNote = SetPianoNote91; 
                break;
            case 92:
                selectedNote = SetPianoNote92; 
                break;
            case 93:
                selectedNote = SetPianoNote93; 
                break;
            case 94:
                selectedNote = SetPianoNote94; 
                break;  
            case 95:
                selectedNote = SetPianoNote95; 
                break;
            case 96:
                selectedNote = SetPianoNote96; 
                break;  
        }
        return selectedNote; 
    }

    function noteUpdaterSelector(noteNumber){
        let selectedNote = null; 
        switch(noteNumber){
            case 21:
                selectedNote = setPianoNote21; 
                break;
            case 22:
                selectedNote = pianoNote22; 
                break;
            case 23:
                selectedNote = pianoNote23; 
                break;
            case 24:
                selectedNote = pianoNote24; 
                break;
            case 25:
                selectedNote = pianoNote25; 
                break;
            case 26:
                selectedNote = pianoNote26; 
                break;
            case 27:
                selectedNote = pianoNote27; 
                break;
            case 28:
                selectedNote = pianoNote28; 
                break;
            case 29:
                selectedNote = pianoNote29; 
                break;
            case 30:
                selectedNote = pianoNote30;  
                break;
            case 31:
                selectedNote = pianoNote31; 
                break;
            case 32:
                selectedNote = pianoNote32; 
                break;
            case 33:
                selectedNote = pianoNote33; 
                break;
            case 34:
                selectedNote = pianoNote34; 
                break;
            case 35:
                selectedNote = pianoNote35; 
                break;
            case 36:
                selectedNote = pianoNote36; 
                break;
            case 37:
                selectedNote = pianoNote37; 
                break;
            case 38:
                selectedNote = pianoNote38; 
                break;
            case 39:
                selectedNote = pianoNote39; 
                break;
            case 40:
                selectedNote = pianoNote40; 
                break;
            case 41:
                selectedNote = pianoNote41; 
                break;
            case 42:
                selectedNote = pianoNote42; 
                break;    
            case 43:
                selectedNote = pianoNote43; 
                break;
            case 44:
                selectedNote = pianoNote44; 
                break;
            case 45:
                selectedNote = pianoNote45; 
                break;
            case 46:
                selectedNote = pianoNote46; 
                break;
            case 47:
                selectedNote = pianoNote47; 
                break;
            case 48:
                selectedNote = pianoNote48; 
                break;
            case 49:
                selectedNote = pianoNote49; 
                break;
            case 50:
                selectedNote = pianoNote50; 
                break;
            case 51:
                selectedNote = pianoNote51; 
                break;
            case 52:
                selectedNote = pianoNote52; 
                break;
            case 53:
                selectedNote = pianoNote53; 
                break;   
            case 54:
                selectedNote = pianoNote54; 
                break;
            case 55:
                selectedNote = pianoNote55; 
                break;
            case 56:
                selectedNote = pianoNote56; 
                break;
            case 57:
                selectedNote = pianoNote57; 
                break;
            case 58:
                selectedNote = pianoNote58; 
                break;
            case 59:
                selectedNote = pianoNote59; 
                break;
            case 60:
                selectedNote = pianoNote60; 
                break;
            case 61:
                selectedNote = pianoNote61; 
                break;
            case 62:
                selectedNote = pianoNote62; 
                break;
            case 63:
                selectedNote = pianoNote63; 
                break;
            case 64:
                selectedNote = pianoNote64; 
                break;
            case 65:
                selectedNote = pianoNote65; 
                break;
            case 66:
                selectedNote = pianoNote66; 
                break;
            case 67:
                selectedNote = pianoNote67; 
                break;
            case 68:
                selectedNote = pianoNote68; 
                break;
            case 69:
                selectedNote = pianoNote69; 
                break;
            case 70:
                selectedNote = pianoNote70; 
                break;
            case 71:
                selectedNote = pianoNote71; 
                break;
            case 72:
                selectedNote = pianoNote72; 
                break;
            case 73:
                selectedNote = pianoNote73; 
                break;
            case 74:
                selectedNote = pianoNote74; 
                break;
            case 75:
                selectedNote = pianoNote75; 
                break;    
            case 76:
                selectedNote = pianoNote76; 
                break;
            case 77:
                selectedNote = pianoNote77; 
                break;
            case 78:
                selectedNote = pianoNote78; 
                break;
            case 79:
                selectedNote = pianoNote79; 
                break;
            case 80:
                selectedNote = pianoNote80; 
                break;
            case 81:
                selectedNote = pianoNote81; 
                break;
            case 82:
                selectedNote = pianoNote82; 
                break;
            case 83:
                selectedNote = pianoNote83; 
                break;
            case 84:
                selectedNote = pianoNote84; 
                break;
            case 85:
                selectedNote = pianoNote85; 
                break;
            case 86:
                selectedNote = pianoNote86; 
                break;   
            case 87:
                selectedNote = pianoNote87; 
                break;
            case 88:
                selectedNote = pianoNote88; 
                break;
            case 89:
                selectedNote = pianoNote89; 
                break;
            case 90:
                selectedNote = pianoNote90; 
                break;
            case 91:
                selectedNote = pianoNote91; 
                break;
            case 92:
                selectedNote = pianoNote92; 
                break;
            case 93:
                selectedNote = pianoNote93; 
                break;
            case 94:
                selectedNote = pianoNote94; 
                break;  
            case 95:
                selectedNote = pianoNote95; 
                break;
            case 96:
                selectedNote = pianoNote96; 
                break;  
        }
        return selectedNote; 
    }

    function loadAllNotes() {
        for(let note = 21; note <= 96; note++){
            let audio = noteSelector(note); 
            if(audio){
                console.log("loading note :" + note); 
                audio.load(); 
            }
        }
    }

    function playNotes(notes){
        notes.forEach( (note)=> {
            noteSelector(note).play(); 
        }); 
    }

    loadAllNotes(); 

    return (
        <>
        <Button onClick = {() => {playNotes([43,48,50,52])}}>Play note 21</Button>    
        <div>Piano page!</div>
        </>
    ); 
}
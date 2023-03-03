import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PianoChordMenu(props){
    let accordionStyle = {
        width: "300px"
    }; 
    //console.log("props keys: ", Object.keys(props)); 
    //console.log("props.chordData " , props.chordData); 
    //console.log("props.chordData.musicalKeyObjects ", props.chordData.musicalKeyObjects); 
  
    let musicalKeyObjectsArray;
    if(props){
        musicalKeyObjectsArray = props.chordData.musicalKeyObjects;
    }
    
    //console.log("musical key objects", musicalKeyObjects);
    let musicalKeyAccordions = []; 
    if(musicalKeyObjectsArray){
        musicalKeyObjectsArray.forEach( musicalKey => {
            let key = musicalKey.key[0] + " " + musicalKey.key[1]; 
            let octaveFour = null; 
            musicalKey["chords"].forEach(octaveObject => {
                if(octaveObject["octave"] == 4){
                    octaveFour = octaveObject; 
                }
            }); 


            let scaleDegrees = octaveFour["scaleDegree"].map( scaleDegreeObject => {
                let chords = scaleDegreeObject["chords"].map( chord => {
                    //console.log("keys in chord object , " , Object.keys(chord)); 
                    //console.log(chord.notes);
                    let chordString = chord.root + " " + chord.type; 
                    return (
                        <div> 
                            <div>{chordString} </div>
                            <div style = {{marginLeft: "10px"}} onClick = {() => {props.playNotes(chord.notes)}}> Play </div>
                        </div>
                    );
                }); 

                return(
                    <Accordion sx = {accordionStyle}>
                        <AccordionSummary> 
                        <ExpandMoreIcon />
                            {scaleDegreeObject.scaleDegree}  
                        </AccordionSummary>
                        <AccordionDetails> 
                            {chords}
                        </AccordionDetails>
                    </Accordion>
                ); 
                
            });

            musicalKeyAccordions.push(
                <Accordion key = {key}  sx = {accordionStyle}>
                <AccordionSummary>
                <ExpandMoreIcon />
                    <div>
                        Key : {key}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {scaleDegrees}
                </AccordionDetails>
                </Accordion>
            ); 
            
        });
    } 
    


    return(
        <div>
            
            {musicalKeyAccordions}            
            
        </div>
    );
}
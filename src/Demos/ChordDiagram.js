import { getTableRowUtilityClass, Grid } from "@mui/material";

export default function ChordDiagram(props){
    //props 
    //tuning - ["E","A","D","G","B","E"]- 1st string through 6th
    //chord - ["mute",54,60,72,"open","open"]- 1st string through 6th -1st is low E
    //leftyOrRighty - "left" or "right"
    //chord diagrams in general show five frets 
    //width - in px - width of the graphic will be greater than height
    
    //midi notes of open strings for different tunings
    const midiNotesOpenStrings = 
        {
            standard: [40,45,50,55,59,64], 
            //other tunings here
        };
    const guitarStringSizes = [
        "6px solid grey", 
        "4.5px solid grey",
        "3.5px solid grey",
        "2.5px solid grey",
        "1.8px solid grey",
        "1px solid grey"
    ]; 

    //C major chord for testing - eg "chord" prop
    //let cMajorChord = ["mute",48,52,"open",60,"open"];



    let strings = props.tuning.length; 
    let widthBoxes = strings + 1;
    let heightBoxes = 7;
    //make width of boxes an integer 
    let widthOfBoxInPixels =  Math.floor(props.width / widthBoxes); 
    let heightOfBoxInPixels = widthOfBoxInPixels; 
    let totalWidthPixels = widthOfBoxInPixels * widthBoxes;
    let totalHeightPixels = heightOfBoxInPixels * heightBoxes; 

    //get frets array 
    const getFrets = (tuning, chord) => {
        // onlyy standard tuning for now 

        let openStringsMidiNotes = midiNotesOpenStrings["standard"];
        //console.log("open string notes: " + openStringsMidiNotes); 
        //console.log("chord: " + chord); 

        let frets = chord.map( (note, index) => {
            if(note === "mute"){
                return "mute"; 
            }
            else if( note === "open"){
                return "open";
            } else {
                return (note - openStringsMidiNotes[index]); 
            }

        });

        return frets; 
    };

    //args: ["mute", 3,2,"open", 1,"open"]
    const getStartingFret = (frets) => {
        let greaterThan5 = false; 
        let lowest = 1000; 

        frets.forEach( fret =>{
            if(typeof fret == "number") {
                if(fret > 5){
                    greaterThan5 = true;
                }
                if(fret < lowest ){
                    lowest = fret; 
                }
            }
        });

        if(greaterThan5){
            return lowest; 
        } 
        else {
            return 1; 
        }

    }

    //console.log("getFRets: " + getFrets([],props.chord));

    //["mute", 3,2,"open", 1,"open"]
    let frets = getFrets([], props.chord);
  

    let startingFret = getStartingFret(frets); 

    
    let circleWidth = widthOfBoxInPixels / 2;
    let circleHeight = widthOfBoxInPixels / 2;
    let xAndOFontSize = widthOfBoxInPixels / 3;  

    let tdStyle = {boxSizing: "border-box", border :"1px solid silver" , width: widthOfBoxInPixels, height: heightOfBoxInPixels};
    let tdInvisibleStyle = {boxSizing: "border-box", border: "1px solid white", borderRight: "none",  width: widthOfBoxInPixels, height: heightOfBoxInPixels};
    let tdInvisibleStyleWithBridge = { boxSizing: "border-box", border: "1px solid white", borderBottom: "5px solid grey",  width: widthOfBoxInPixels, height: heightOfBoxInPixels};

    let circleStyle = {width: circleWidth, height: circleHeight, position: "absolute", borderRadius: "50%", zIndex : 2, backgroundColor: "grey"};
    let xAndOStyle = { position: "absolute", zIndex : 2, fontSize: xAndOFontSize};

    const getTableRow = (row) => {
        let numberOfCols = strings + 1; 
        let td = [];
        for(let col = 1; col <= numberOfCols; col++){
            if(row == 7){
                td.push(<td style = {tdInvisibleStyle }></td>); 
            } 
            else if((row == 1) && (startingFret == 1) && (col != 1) && (col != numberOfCols)){
                td.push(<td style = {tdInvisibleStyleWithBridge }></td>)
            }
            else if(col == 1 && row == 2 && (props.leftyOrRighty == "right" || props.leftyOrRighty == "righty")){
                td.push(<td style = {tdInvisibleStyle }> {(startingFret == 1? null: startingFret)}</td>);
            }
            else if(col == numberOfCols && row == 2 && (props.leftyOrRighty == "left" || props.leftyOrRighty == "lefty")){
                td.push(<td style = {tdInvisibleStyle }> {(startingFret == 1? null: startingFret)}</td>);
            }
            else if (row == 1 || col == 1 || col == numberOfCols){
                td.push(<td style = {tdInvisibleStyle }></td>);
            } 
            else {
                if(props.leftyOrRighty == "left" || props.leftyOrRighty == "lefty"){
                    if(col == 2){
                        td.push(<td style = {{...tdStyle, borderLeft: guitarStringSizes[guitarStringSizes.length -1 ] + " !important", borderRight: guitarStringSizes[guitarStringSizes.length -2] }}></td>);
                    } else {
                        console.log("guitarStringSizes[length -1 ] : " + guitarStringSizes[guitarStringSizes.length - 1] ); 
                        td.push(<td style = {{...tdStyle, borderRight: guitarStringSizes[guitarStringSizes.length - col] }}></td>);
                    }
                } else {
                    if(col == strings){
                        td.push(<td style = {{...tdStyle, borderLeft: guitarStringSizes[guitarStringSizes.length -2 ] , borderRight: guitarStringSizes[guitarStringSizes.length -1]}}></td>);
                    }
                    else {
                        td.push(<td style = {{...tdStyle, borderLeft: guitarStringSizes[col-2]}}> </td>); 
                    }
                }
            }
        }
        return td; 
    }

    //args : ["mute", 3,2,"open", 1,"open"]
    const getAbsolutelyPositionedElements = (frets) => {
        let absoluteElements = []; 
        frets.forEach( (fret, index) => {
            if(props.leftyOrRighty == "right" || props.leftyOrRighty == "righty"){
                if(typeof fret == "number"){
                    absoluteElements.push(
                        <div  style = {{...circleStyle, left: (index+1)*widthOfBoxInPixels - (0.5*circleWidth), top: (fret - startingFret)*heightOfBoxInPixels + (1.5*heightOfBoxInPixels) - (0.5*circleHeight)}}></div>
                    );
                } 
                else if(fret == "mute"){
                    absoluteElements.push(
                        <div  style = {{...xAndOStyle, left: (index+1)*widthOfBoxInPixels - (0.5*xAndOFontSize), top: 0.5*heightOfBoxInPixels}}>X</div>
                    );
                }
                else if(fret == "open"){
                    absoluteElements.push(
                        <div style = {{...xAndOStyle, left: (index+1)*widthOfBoxInPixels - (0.5*xAndOFontSize), top: 0.5*heightOfBoxInPixels}}>O</div>
                    );
                } else {
                    //error occured 
                    absoluteElements.push(
                        <div style = {{...xAndOStyle, left: (index+1)*widthOfBoxInPixels, top: 0.5*heightOfBoxInPixels}}>err</div>
                    );
                }
            }
            else {
                //lefty 
                if(typeof fret == "number"){
                    absoluteElements.push(
                        <div  style = {{...circleStyle, left: ((strings+1) - (index+1))*widthOfBoxInPixels - (0.5*circleWidth), top: (fret - startingFret)*heightOfBoxInPixels + (1.5*heightOfBoxInPixels) - (0.5*circleHeight) }}></div>
                    );
                } 
                else if(fret == "mute"){
                    absoluteElements.push(
                        <div  style = {{...xAndOStyle, left: ((strings+1) - (index+1))*widthOfBoxInPixels - (0.5*xAndOFontSize), top: 0.5*heightOfBoxInPixels}}>X</div>
                    );
                }
                else if(fret == "open"){
                    absoluteElements.push(
                        <div style = {{...xAndOStyle, left: ((strings+1) - (index+1))*widthOfBoxInPixels - (0.5*xAndOFontSize), top: 0.5*heightOfBoxInPixels}}>O</div>
                    );
                } else {
                    //error occured 
                    absoluteElements.push(
                        <div  style = {{...xAndOStyle, left: ((strings+1) - (index+1))*widthOfBoxInPixels, top: 0.5*heightOfBoxInPixels}}>err</div>
                    );
                }
            }
        }); 
        //console.log(absoluteElements); 
        return absoluteElements; 
    }

    let absoluteElements = getAbsolutelyPositionedElements(frets); 

    return(
        <div style = {{position: "relative", opacity: 0.6}}>
            <table style = {{borderCollapse : "collapse", minWidth: totalWidthPixels}} >
                <tbody>
                <tr>
                    {getTableRow(1)}
                </tr>
                <tr>
                    {getTableRow(2)}
                </tr>
                <tr>
                    {getTableRow(3)}
                </tr>
                <tr>
                    {getTableRow(4)}
                </tr>
                <tr>
                    {getTableRow(5)}
                </tr>
                <tr>
                    {getTableRow(6)}
                </tr>
                <tr>
                    {getTableRow(7)}
                </tr>
                </tbody>
            </table>
            
            {absoluteElements}
        </div> 
    )
    
    /*
    return ( <>
        
        <div id = "container" style = {{position: "relative", margin: 0, padding: 0}}>
            

            
            <table style = {{borderCollapse: "collapse"}}>
                <tr style = {{height:heightOfBoxInPixels, width: widthOfBoxInPixels * 7}}>
                    
                </tr>
                <tr style = {{height:heightOfBoxInPixels, width: widthOfBoxInPixels * 7}} >
                <td style = {{tdInvisibleStyle }}>x</td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{tdInvisibleStyle }}>6</td>
                    
                </tr>
                <tr>
                <td style = {{tdInvisibleStyle }}>x</td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                </tr>
                <tr>
                <td style = {{tdInvisibleStyle }}>x</td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                    <td style = {{...tdStyle , borderTop: "3px solid black"}}></td>
                </tr>
            </table>
            
            <div style = {{...circleStyle, top: heightOfBoxInPixels, left: widthOfBoxInPixels}}></div>
            
        </div>

        </>
    ); 
    */
}
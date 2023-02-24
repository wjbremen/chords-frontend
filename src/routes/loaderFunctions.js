
//functions for fetching data from server

export async function get_chord_data(){
    //const chordData = await fetch("/getChordData/byKey/C/major"); 
    const chordData = await fetch("/getChordData/byRoot/55/66")
    .then( resp => {
        return resp.text(); 
    }).then(bodyText => {
        return bodyText; 
    }); 
    console.log("chordData ", chordData); 
    return chordData; 
}
/*
export async function guitar_key_get() {
    let response = "";
    await fetch("/guitar")
    .then( resp => {
        return resp.text();
    })
    .then( textResp => {
        response = textResp;

    })
    .catch( err => {
        throw new Error("error fetching: guitar_key_get");
    });
    return response; 
}

export async function piano_key_get() {
    let response = "";
    await fetch("/getPianoFiles1")
    .then( resp => {
        return resp.text();
    })
    .then( textResp => {
        response = textResp;

    })
    .catch( err => {
        throw new Error("error fetching: piano_key_get");
    });
    return response; 
}
*/

//functions for fetching data from server

export async function get_chord_data(){
    //const chordData = await fetch("/getChordData/byKey/C/major"); 
    let loaderData = {}; 
    const chordData = await fetch("/getChordData/byKey/all")
    .then( resp => {
        //console.log("resp " , resp ); 
        return resp.text(); 
         
    }).then(bodyText => {
        return JSON.parse(bodyText);
    }); 
    console.log("chordData ", chordData); 
    loaderData["musicalKeyObjects"] = chordData; 

    //middle C is midi 60, B above middle C is 71
    const byRoot = await fetch("/getChordData/byRoot/60/71")
    .then( resp => {
        return resp.text();
    })
    .then( bodyText => {
        return JSON.parse(bodyText); 
    });

    loaderData["chordsByRoot"] = byRoot; 
    return loaderData; 

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
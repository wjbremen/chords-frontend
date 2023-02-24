
//functions for fetching data from server

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

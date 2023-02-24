import { useEffect, useState } from "react";


export default function TestRouter(){
    let [serverResponse, setServerResponse] = useState("null"); 
    console.log("inside testRouter"); 

    useEffect( () => {
        async function startFetch(){
            fetch("/guitar").then( resp => {
                return resp.text();
            })
            .then(textResp => {
                setServerResponse(textResp);    
            }); 

        }
        startFetch(); 
    });

    return (
        <>
            <div>Testing</div>
            <div> {`response from server ${serverResponse}`}</div>
        </>
    ); 
}


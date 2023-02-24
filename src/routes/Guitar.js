import {useLoaderData} from "react-router-dom"; 

export default function Guitar(){
    const fetchedGuitarData = useLoaderData(); 
    return(
        <>
        <div>Guitar Page!</div>
        <div>{"fetched loader data : " + fetchedGuitarData} </div>
        </>
    );
}
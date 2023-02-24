import { useEffect, useRef } from "react";
import audioFile1 from "./C.wav"; 
import Button from '@mui/material/Button';


    let connected = false;  
    let dataPlaying = false; 
    let audioElement1; 
    let audioContext; 
    console.log("outside functional component"); 

export default function WebAudioTest() {
    console.log("inside functional component"); 
    //console.log(typeof audioFile); 
    const audioElementRef = useRef(null); 
    useEffect( () => {
        console.log("inside use effect"); 

        audioContext = new AudioContext();

         audioElement1 = document.querySelector("#audio1");
        //const playButton = document.querySelector("button");
        if (!(audioElement1.dataset.connected)){
            console.log("not connected, setting up context"); 
            const track1 = audioContext.createMediaElementSource(audioElement1); 
            track1.connect(audioContext.destination);
            connected = true;
        }
        
        /*
        function handleClick() {
            console.log("play button clicked"); 
            if (audioContext.state === "suspended") {
                audioContext.resume();
            }
            if (playButton.dataset.playing === "false") {
                audioElement1.play();


                playButton.dataset.playing = "true";
            } else if (playButton.dataset.playing === "true") {
                audioElement1.pause();

                playButton.dataset.playing = "false";
            }
        }

        function handleEnded() {
            playButton.dataset.playing = "false";
        }

        playButton.addEventListener("click", handleClick, false);
        audioElement1.addEventListener("ended",handleEnded, false); 
        */

        return () => {
           // playButton.removeEventListener("click",handleClick ); 
           // audioElement1.removeEventListener("ended", handleEnded); 
            audioContext.close(); 
            connected = false; 
            console.log("use effect returing 'cleanup code' "); 
        };
    
    }, []);
    
    const handleReactClick = () => {
        console.log("inside handle react click"); 
        if(dataPlaying){
            audioElementRef.current.pause();  
              
            //console.log(audioElementRef.currentTime); 
            audioElementRef.current.currentTime = 0; 
            audioElementRef.current.play();
            dataPlaying = true; 
        } else {
            audioElementRef.current.play();
            dataPlaying = true; 
        }
        //console.log(audioElementRef.current); 
         
        //audioElement1.play(); 
        //console.log("typeof play(): " + (typeof audioElementRef.current.play() ) ); 
    }

    const handleAudioEnd = () => {
        console.log("inside handleAudioEnd"); 
        dataPlaying = false; 
    }
    


    return (
        <div>
            <div>
            Testing web audio api 
            </div>
            <audio ref = {audioElementRef} onEnded = {handleAudioEnd}src = {audioFile1} id = "audio1" data-connected = {connected} data-playing = {dataPlaying}></audio>

            <Button variant = "outlined" onClick={handleReactClick} data-playing = "false" aria-checked = "false">
                <div>Play</div>
		    </Button>
        </div>

    );
}
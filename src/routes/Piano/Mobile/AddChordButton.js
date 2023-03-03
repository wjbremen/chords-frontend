import { Grid, Paper, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box } from "@mui/system";


export default function AddChordButton(props){
    //props: buttonHeight; 

    let backgroundColor= "rgb(28, 176, 43)";
    let textColor = 'white'; 

    let boxStyle = {
        position: "fixed", 
        bottom: "1%",
        left: "2%",
        right: "2%",
        height: (props.buttonHeight) + "px", 
        backgroundColor: backgroundColor, 
    }; 
    
    let textStyle = {
        color: textColor, 
        fontSize: (props.buttonHeight/2) + "px", 
         textAlign:"center", 
        paddingTop: (props.buttonHeight/8) + "px"
    };
    
    
    return( 
        <Paper sx = {{...boxStyle}}>
            <Box >
                <Grid container>
                    <Grid item xs = {2}>

                    </Grid>
                    <Grid item xs = {6}>
                        <Typography sx = {textStyle}>Browse  </Typography>
                    </Grid>
                    <Grid item xs = {2}>
                        <AddCircleOutlineIcon sx = {{...textStyle, paddingTop: (props.buttonHeight/4) + "px"}} />
                    </Grid>
                    <Grid item xs = {2}>

                    </Grid>
                </Grid>
            </Box>
        </Paper>
    ); 

}
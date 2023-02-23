import { Drawer, List, ListItemText, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function PersistentLeftDrawer(props){
    return(
        <Paper sx = {{height: "100vh"}}>
            <Typography>chords in C maj  </Typography>
            <Typography>chords in with root C  </Typography>
            <Typography> All chords  </Typography>
        </Paper>
        
    );
}
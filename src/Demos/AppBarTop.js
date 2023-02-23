import { AppBar, Typography } from "@mui/material";
import MobileLeftDrawer from "./MobileLeftDrawer";

export default function AppBarTop(props){
    if (props.isMobile){
        return(
            <AppBar>
                <MobileLeftDrawer />
                <Typography variant = "h4">
                    Mobile app bar
                </Typography>
            </AppBar>
        ); 
    } else {
        return(
            <AppBar>
                <Typography variant = "h4">
                    Large screen app bar 
                </Typography>
            </AppBar>
        ); 
    }
    
}
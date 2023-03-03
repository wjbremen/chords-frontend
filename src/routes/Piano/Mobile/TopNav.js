import { Box } from "@mui/system";


export default function TopNav(props){
    let navBarColor = "rgb(38, 114, 158)"; 
    let navbarStyles = {
        position: "fixed", 
        top: 0,
        left: 0, 
        right: 0, 
        height: props.navbarHeight + "px",
        backgroundColor: navBarColor
    };
    return(
        <Box sx = {navbarStyles}>
            Navbar 
        </Box>
    ); 
}
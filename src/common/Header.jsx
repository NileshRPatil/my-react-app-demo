import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
            {/* Header */}
        <AppBar position="static">
          <Toolbar>
            
            {/* Logo */}
            <Typography variant="h6" sx={{mr:4}}>My Website</Typography>

            {/* main navigation */}
            <Box sx={{display:"flex", gap:"2"}}>
              <Button component={Link} to="/" color="inherit">Home</Button>
              <Button component={Link} to="/about" color="inherit">About Us</Button>
              <Button component={Link} to="/contact" color="inherit">Contact</Button>
            </Box>

            <Box sx={{flexGrow:1}} />

            <Box sx={{display:"flex", gap:"1"}}>
              <Button component={Link} to="/login" color="inherit">Login</Button>
              <Button component={Link} to="/register" variant="contained" color="secondary">Register</Button>
            </Box>

          </Toolbar>
        </AppBar>
        </>
    )
}
export default Header;
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <>
        {/* Footer */}
        <Box
          component="footer"
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            py: 2,
            textAlign: "center",
          }}
        >
          <Typography>© 2026 My Website. All rights reserved.</Typography>
        </Box>
        </>
    )
}
export default Footer;
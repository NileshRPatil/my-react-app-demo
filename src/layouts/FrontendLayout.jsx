import { Outlet } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Header from "../common/Header";
import Footer from "../common/Footer";

function FrontendLayout() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "grey.100" }}>

        <Header />

        {/* Main Content */}
        <Box component="main" sx={{ flex: 1, py: 3 }}>
          <Container>
            <Outlet />
          </Container>
        </Box>

        <Footer />
        
      </Box>
    </>
  );
}
export default FrontendLayout;

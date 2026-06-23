import { Box } from "@mui/material";
import HomeSlider from "./HomeSlider";
import ProductList from "./ProductList";

function Home() {
  return (
    <>
      <Box sx={{ maxWidth: "1920px", mx: "auto", mt: 2 }}>
        <HomeSlider />
        <ProductList />
      </Box>
    </>
  );
}

export default Home;

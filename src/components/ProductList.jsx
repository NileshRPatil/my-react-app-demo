import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { Link } from "react-router-dom";




function ProductList() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {

    const skip = (currentPage - 1) * 9;

    axios
      .get(`https://dummyjson.com/products?limit=9&skip=${skip}`)
      .then((response) => {
        setList(response.data.products);
        let pages = parseInt(response.data.total/9);
        setTotalPages(pages);
        console.log(pages)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [currentPage]);


  const onPageChange = (page) =>{
    setCurrentPage(page)
  }

  return (
    <>
    <Typography variant="h4" sx={{ mb: 3, mt:3 }}>
        Product List
      </Typography>
    <Grid container spacing={3} sx={{ px: 1, py: 1 }}>
      {list.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
          <Card >
            <CardMedia
              component="img"
              height="200"
              image={product.thumbnail}
              alt={product.title}
            />

            <CardContent>
              <Typography gutterBottom variant="h6">
                {product.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>

              <Typography variant="h6" sx={{ mt: 1 }}>
                ₹{product.price}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" component={Link} to={`/products/${product.id}`} >View</Button>
              <Button size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}

      <Box>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
      </Box>

    </Grid>
    </>
  );
}

export default ProductList;
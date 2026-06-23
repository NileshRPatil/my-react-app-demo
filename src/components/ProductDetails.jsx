import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

const Slider = ReactSlick.default || ReactSlick;

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Rating,
  Avatar,
  Divider,
} from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box display="flex"  p={3}>
      <Card sx={{ maxWidth: 1000, width: "100%" }}>

        {/* IMAGE CAROUSEL */}
        <Box sx={{ p: 2 }}>
          <Slider {...settings}>
            {product.images.map((img, index) => (
              <Box key={index}>
                <img
                  src={img}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                    borderRadius: 10
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* PRODUCT DETAILS */}
        <CardContent>
          <Typography variant="h5">{product.title}</Typography>

          <Rating value={product.rating} precision={0.1} readOnly />

          <Typography mt={2}>{product.description}</Typography>

          <Typography variant="h6" color="primary" mt={2}>
            ₹ {product.price}
          </Typography>

          <Typography color="text.secondary">
            Brand: {product.brand}
          </Typography>

          <Typography color="text.secondary">
            Stock: {product.stock}
          </Typography>

          <Button variant="contained" sx={{ mt: 2 }}>
            Add to Cart
          </Button>

          <Divider sx={{ my: 3 }} />

          {/* REVIEWS SECTION */}
          <Typography variant="h6">Customer Reviews</Typography>

          {product.reviews.map((rev, index) => (
            <Box
              key={index}
              display="flex"
              gap={2}
              mt={2}
              p={2}
              border="1px solid #eee"
              
            >
              <Avatar>{rev.reviewerName[0]}</Avatar>

              <Box>
                <Typography fontWeight="bold">
                  {rev.reviewerName}
                </Typography>

                <Rating value={rev.rating} readOnly size="small" />

                <Typography variant="body2">
                  {rev.comment}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {new Date(rev.date).toDateString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductDetails;
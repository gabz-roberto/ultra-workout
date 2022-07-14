import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography fontWeight="600" fontSize="27px" color="#C2000D">
        Clube Fitness
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        mb="25px" mt="30px"
      >
        Foco, Persistência <br /> e Resultados.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Acompanhe os exercícios de forma efetiva
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: "#C2000D", padding: '10px'}}>
        Veja Mais
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#5649AB"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        <span className="title">
          Ultra Workout
        </span>
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;

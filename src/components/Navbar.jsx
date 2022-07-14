import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" }, justifyContent: "none" }} px="20px"
    >
      <Link to="/">
        <h2 className="title" style={{ fontSize: "30px", color: "#eee" }}>
          Ultra Workout
        </h2>
      </Link>
      <Stack direction="row" gap="40px" fontSize="21px" alignItems="flex-end">
        <Link
          to="/"
          style={{ color: "#eee", borderBottom: "3px solid #4637A6" }}
        >
          Início
        </Link>
        <a href="#exercises" style={{ color: "#ddd" }}>
          Exercícios
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

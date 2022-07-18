import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} p="20px" mt="50px">
      <Typography variant="h4" mb="45px">
        Resultados
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: { lg: "110px", xs: "50px" } }}>
        {exercises.map((item, i) => (
          <ExerciseCard key={i} exercise={item}/>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;

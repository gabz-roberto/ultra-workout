import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;

  const indexLastItem = currentPage * exercisesPerPage;

  const indexFirstItem = indexLastItem - exercisesPerPage;

  const currentExercises = exercises.slice(indexFirstItem, indexLastItem);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [new Array()];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} p="20px" mt="50px">
      <Typography variant="h4" mb="45px">
        Resultados
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {currentExercises.map((item, i) => (
          <ExerciseCard key={i} exercise={item} />
        ))}
      </Stack>
      <Stack alignItems="center" mt="100px">
        {exercises.length > 9 && (
          <Pagination
            page={currentPage}
            onChange={paginate}
            size="large"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

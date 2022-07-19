import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";

import { Details, ExerciseVideos, SimilarExercises } from "../components/index";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailsData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions);
      
      setExerciseDetails(exerciseDetailsData);
    }

    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetails;

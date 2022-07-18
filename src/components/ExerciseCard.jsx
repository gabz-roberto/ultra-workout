import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row" mt="5px">
        <Button
          sx={{
            ml: "20px",
            color: "#eee",
            background: "#C2000D",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
            {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "20px",
            color: "#eee",
            background: "#DE7602",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
            {exercise.target}
        </Button>
      </Stack>
      <Typography color="#eee" fontWeight={700} fontSize="15px" textTransform="capitalize" ml="20px" mt="10px" pb="10px">
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

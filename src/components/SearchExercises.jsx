import React, { useState, useEffect } from "react";
import { Stack, Box, Button, Typography, TextField } from "@mui/material";

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter((exercise) => 
        exercise.name.toLowerCase().includes(search) || 
        exercise.target.toLowerCase().includes(search) || 
        exercise.equipment.toLowerCase().includes(search) || 
        exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack mt="37px" p="20px" alignItems="center" justifyContent="center">
      <Typography
        fontWeight={700}
        textAlign="center"
        sx={{ fontSize: { lg: "44px", xm: "30px" } }}
        mb="50px"
      >
        Lista de Exercícios
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
          height="75px"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Buscar exercícios"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
              outline: "none",
              color: "#eee",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#4c495c",
            borderRadius: "5px",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#C2000D",
            color: "#eee",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "100px",
            },
            fontSize: { lg: '20px', xm: '14px' },
            height: '56px',
            position: 'absolute',
            right: 0,
          }}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          {/* Criar o carousel */}
      </Box>
    </Stack>
  );
};

export default SearchExercises;

import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";

import "./App.css";

function App() {
  return (
    <Box m="auto" width="400px" sx={{ width: { xl: '1488px' } }}>
      <Navbar />
      <Routes>
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

import React from "react";
import { Typography, Stack } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      alignItems="center"
      justifyItems="center"
      type="button"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #C2000D" : "",
        backgroundColor: "#0E1333",
        borderBottomLeftRadius: "40px",
        borderTopRightRadius: "40px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "50px",
        padding: '20px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ behavior: 'smooth', top: 1800, left: 100 })
    }}
    >
      <img src={Icon} alt="gym" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize='23px' fontWeight={700} textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

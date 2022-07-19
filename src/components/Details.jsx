import React from "react";
import { Stack, Typography, Button } from "@mui/material";

import BodyPartIcon from "../assets/icons/body-part.png";
import EquipmentIcon from "../assets/icons/equipment.png";
import TargetIcon from "../assets/icons/target.png";

const Details = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  return (
    <Stack
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      gap="60px"
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "34px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Os exercícios mantêm você forte.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup é um dos melhores <br /> exercícios para atingir seu {target}. Ele irá ajudá-lo a melhorar o seu <br /> humor e ganhar energia.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Details;

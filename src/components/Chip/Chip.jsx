import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import './chip.css';
import * as React from "react";

export default function ChipBag({ imgSrc }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "row-reverse",
        position: "relative",
        zIndex: "999",
        top:'12vh'
      }}
    >
      <Chip
        variant="outlined"
        color="neutral"
        size="lg"
        sx={{
          padding: "0.5rem",
        }}
      >
        <Avatar src={imgSrc} sx={{ "--Avatar-size": "3rem" , borderRadius:'50px'}} />
        <p>Josephine Blanton</p>
      </Chip>
    </Box>
  );
}

import { Button } from "@mui/material";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateReel = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      size="medium"
      onClick={() => navigate("/reels/create")}
      sx={{
        gap: "0.2rem",
        whiteSpace: "nowrap",
      }}
    >
      <AiOutlinePlus style={{ flexShrink: 0 }} />
      <span>New Reel</span>
    </Button>
  );
};

export default CreateReel;
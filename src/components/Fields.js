import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Fields = ({ name, email, index }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button variant="contained" color="error">
          <DeleteOutlineIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;

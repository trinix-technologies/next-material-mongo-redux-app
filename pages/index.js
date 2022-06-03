import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function index() {
  return (
    <>
      <h1 className="text-highlighted">Hi testing</h1>
      <p style={{ color: "red" }}>hi there</p>
      <Box
        className="paper-content"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </>
  );
}

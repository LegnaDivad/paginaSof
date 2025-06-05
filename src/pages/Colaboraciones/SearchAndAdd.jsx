import React from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

function SearchAndAdd({ searchTerm, setSearchTerm, onAddClick }) {
  return (
    <div className="search-container">
      <TextField
        placeholder="Buscar proyectos"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#B0B0B0" }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "10px",
            backgroundColor: "#fff",
            paddingLeft: "8px",
          },
        }}
        inputProps={{
          style: {
            fontWeight: 600,
            color: "#B0B0B0",
          },
        }}
      />

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onAddClick}
        sx={{
          borderRadius: "10px",
          backgroundColor: "#FF004C",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#d60042",
          },
        }}
      >
        Nuevo proyecto
      </Button>
    </div>
  );
}

export default SearchAndAdd;

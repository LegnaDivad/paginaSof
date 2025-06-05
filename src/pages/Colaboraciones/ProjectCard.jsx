import React from "react";
import { Button } from "@mui/material";

function ProjectCard({ project }) {
  return (
    <div className="proyecto-card" key={project.id}>
      <div className="proyecto-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="proyecto-actions">
        <Button
          variant="outlined"
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            color: "#B0B0B0",
            borderColor: "#B0B0B0",
            "&:hover": {
              backgroundColor: "#fff",
              borderColor: "#B0B0B0",
            },
          }}
        >
          Ver proyecto
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF004C",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#d60042",
            },
          }}
        >
          Unirme
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;

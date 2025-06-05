import React from "react";
import { Select, MenuItem } from "@mui/material";

function ProjectsTabs({ selectedTab, setSelectedTab, filter, setFilter }) {
  const tabs = ["Destacados", "Nuevos", "Participando", "Mis propuestas"];

  return (
    <div className="proyectos-tabs">
        {tabs.map((tab) => (
        <span
          key={tab}
          onClick={() => setSelectedTab(tab)}
          style={{
            cursor: "pointer",
            fontWeight: selectedTab === tab ? 700 : 600,
            borderBottom: selectedTab === tab ? "2px solid black" : "2px solid transparent",
            padding: "6px 0",
            userSelect: "none",
          }}
        >
          {tab}
        </span>
      ))}

      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        size="small"
        sx={{
          marginLeft: "auto",
          borderRadius: "10px",
          fontWeight: "bold",
          color: "#B0B0B0",
          borderColor: "#B0B0B0",
        }}
      >
        <MenuItem value="Todos">Todos</MenuItem>
        <MenuItem value="Primaria">Primaria</MenuItem>
        <MenuItem value="Secundaria">Secundaria</MenuItem>
      </Select>
    </div>
  );
}

export default ProjectsTabs;

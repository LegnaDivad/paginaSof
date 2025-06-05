import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Colaboraciones.css";

import UserCarousel from "./UserCarousel";
import SearchAndAdd from "./SearchAndAdd";
import ProjectsTabs from "./ProjectsTabs";
import ProjectCard from "./ProjectCard";
import NewProjectDialog from "./NewProjectDialog";

const initialProjects = [
  {
    id: 1,
    title: "Aplicación de IA para el aula",
    description:
      "Desarrollar una aplicación móvil basada en inteligencia artificial para promover el aprendizaje en estudiantes",
    category: "Destacados",
  },
  {
    id: 2,
    title: "Recurso abierto de historia",
    description:
      "Crear un recurso educativo interactivo para enseñar historia antigua",
    category: "Nuevos",
  },
];

function Colaboraciones() {
  const [selectedTab, setSelectedTab] = useState("Destacados");
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [openDialog, setOpenDialog] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "Destacados",
  });

  const handleAddProject = () => {
    const id = projects.length + 1;
    const updatedProjects = [...projects, { id, ...newProject }];
    setProjects(updatedProjects);
    setOpenDialog(false);
    setNewProject({ title: "", description: "", category: "Destacados" });
  };

  const filteredProjects = projects.filter(
    (proj) =>
      proj.category === selectedTab &&
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "Todos" || proj.category === filter)
  );

  return (
    <Layout>
      <div className="colaboraciones-header fade-in-header">
        <h1 className="colaboraciones-title">Colaboraciones</h1>
        <p className="colaboraciones-subtitle">
          Conecta con otros docentes, postula ideas y construyan juntos recursos
          educativos!
        </p>
      </div>

      <div style={{ height: "180px", maxWidth: "100%", overflow: "hidden" }}>
        <UserCarousel />
      </div>

      <div className="fade-in-right">
        <SearchAndAdd
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddClick={() => setOpenDialog(true)}
        />
      </div>

      <div className="proyectos-section">
        <ProjectsTabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          filter={filter}
          setFilter={setFilter}
        />

        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <NewProjectDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        newProject={newProject}
        setNewProject={setNewProject}
        onCreate={handleAddProject}
      />
    </Layout>
  );
}

export default Colaboraciones;

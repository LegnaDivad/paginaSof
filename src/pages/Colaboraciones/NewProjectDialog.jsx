import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import RAinput from "../../components/form/RAinput";
import RAtextarea from "../../components/form/RAtextarea";
import RAselect from "../../components/form/RAselect";

function NewProjectDialog({ open, onClose, newProject, setNewProject, onCreate }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Nuevo Proyecto</DialogTitle>
      <DialogContent>
        <RAinput
          autoFocus
          label="Título"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <RAtextarea
          label="Descripción"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <RAselect
          value={newProject.category}
          onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
          options={[
            {
              value: 'Destacados', label: 'Destacados',
            },
            {
              value: 'Nuevos', label: 'Nuevos',
            },
            {
              value: 'Participando', label: 'Participando',
            },
            {
              value: 'Mis propuestas', label: 'Mis propuestas',
            },

          ]}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onCreate} variant="contained" color="primary">
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewProjectDialog;

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  List,
  Paper,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

export default function DetalleConversacion({
  conversacion,
  comentariosIniciales,
  onBack,
}) {
  const [comentarios, setComentarios] = useState(comentariosIniciales);
  const [nuevoComentario, setNuevoComentario] = useState("");

  if (!conversacion) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6">No se ha encontrado la conversación seleccionada.</Typography>
        <Button onClick={onBack} sx={{ mt: 2 }}>
          Volver
        </Button>
      </Box>
    );
  }

  const agregarComentario = () => {
    if (!nuevoComentario.trim()) return;

    const nuevo = {
      autor: "Tú",
      hace: "justo ahora",
      texto: nuevoComentario.trim(),
    };

    setComentarios([nuevo, ...comentarios]);
    setNuevoComentario("");
  };

  return (
    <Box sx={{ p: 1 }}>
      <Button onClick={onBack} sx={{ ml: 2 }}>
        Volver
      </Button>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
        {conversacion.icon} {conversacion.titulo}
      </Typography>

      <List>
        {comentarios.map((coment, index) => (
          <Paper
            key={index}
            sx={{
              p: 2,
              mb: 1.5,
              borderLeft: coment.destacado ? "4px solid #2196f3" : "none",
            }}
            elevation={coment.destacado ? 4 : 1}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <AccountCircleIcon sx={{ mr: 1 }} />
              <Typography sx={{ fontWeight: "bold", mr: 1 }}>
                {coment.autor}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {coment.hace}
              </Typography>
            </Box>
            <Typography>{coment.texto}</Typography>
            <Box sx={{ textAlign: "right", mt: 1 }}>
              <IconButton>
                <ThumbUpAltOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
        <EditIcon sx={{ mt: "5px" }} />
        <TextField
          fullWidth
          placeholder="Escribe un comentario"
          multiline
          minRows={2}
          variant="outlined"
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              agregarComentario();
            }
          }}
        />
      </Box>

      <Box sx={{ mt: 2, textAlign: "right" }}>
        <Button
          variant="contained"
          onClick={agregarComentario}
          disabled={!nuevoComentario.trim()}
        >
          Comentar
        </Button>
      </Box>
    </Box>
  );
}

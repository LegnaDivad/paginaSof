import React from "react";
import { Box, Typography, Paper, Avatar, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import MotionReveal from "../../components/animations/MotionReveal";

const DetalleVideo = () => {
  const { color } = useParams();

  return (
    <Layout>
      <Box sx={{ display: "flex", p: 4 }}>
        {/* Contenido principal a la izquierda */}
        <MotionReveal>
          <Box sx={{ flex: 1, pr: 2 }}>
          <Typography variant="h1" fontWeight="bold" mb={3}>
            Congreso
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "450px",
              backgroundColor: `#${color}`,
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              component="span"
              sx={{
                width: 64,
                height: 64,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "20px solid white",
                  marginLeft: "4px",
                }}
              />
            </Box>
          </Box>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Educación Aumentada: Inteligencia Artificial para Transformar el Aula
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar sx={{ width: 32, height: 32, mr: 1 }}>E</Avatar>
            <Typography variant="body2" fontWeight="bold" mr={1}>
              Emmanuel Elizondo
            </Typography>
            <Button variant="contained" size="small" color="error" sx={{ borderRadius: 5, textTransform: 'none' }}>
              Seguir
            </Button>
          </Box>
          <Typography variant="caption" display="block" color="text.secondary" mb={2}>
            126k visualizaciones hace 2 meses
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            En esta ponencia del Congreso Recrea Academy 2025, el especialista Emmanuel Elizondo aborda cómo la inteligencia artificial está revolucionando los modelos educativos tradicionales. A través de ejemplos prácticos...
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="body2" fontWeight="bold" sx={{ mr: 1 }}>
              161 comentarios
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', cursor: 'pointer' }}>
              Ordenar por
            </Typography>
          </Box>
          <TextField
            fullWidth
            placeholder="Añade un comentario …"
            variant="standard"
            sx={{ mb: 3 }}
          />
          <Box display="flex" alignItems="flex-start">
            <Avatar sx={{ width: 32, height: 32, mr: 2 }}>LC</Avatar>
            <Box>
              <Typography variant="body2" fontWeight="bold">Luis Castañeda</Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                Esta charla fue verdaderamente inspiradora. Me fascinó cómo se enlaza con el enfoque de Gemini para la generación de imágenes educativas. Sin duda, aplicaré varias de las estrategias mencionadas con mis estudiantes. ¡Gracias por compartir conocimiento tan valioso!
              </Typography>
              <Box display="flex" alignItems="center">
                <Button size="small" sx={{ textTransform: 'none', fontSize: 12, mr: 1 }}>👍 138</Button>
                <Button size="small" sx={{ textTransform: 'none', fontSize: 12, mr: 1 }}>Responder</Button>
                <Button size="small" sx={{ textTransform: 'none', fontSize: 12, color: 'error.main' }}>4 respuestas</Button>
              </Box>
            </Box>
          </Box>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Este es un ejemplo de visualización con el color seleccionado
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Esta página es un prototipo y solo representa el color elegido desde el carrusel.
          </Typography>
          </Box>
        </MotionReveal>

        {/* Transcripción a la derecha */}
        <Paper
          elevation={3}
          sx={{
            width: "300px",
            height: "100%",
            p: 2,
            borderRadius: 2,
            ml: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="error" mb={2}>
            Transcripción
          </Typography>
          <Box
            component="input"
            type="text"
            placeholder="Buscar en el video"
            sx={{
              mb: 2,
              px: 1,
              py: 1,
              borderRadius: 1,
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
          <Box sx={{ overflowY: "auto", flex: 1 }}>
            {["1:35", "1:38", "1:40", "1:42", "1:44", "1:46", "1:48", "1:50", "1:52", "1:54", "1:56"].map((time) => (
              <Box key={time} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    backgroundColor: "#E50914",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "12px",
                    borderRadius: 1,
                    px: 1,
                    py: "2px",
                    mr: 1,
                    minWidth: "30px",
                    textAlign: "center",
                  }}
                >
                  {time}
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Texto de ejemplo para el minuto {time}.
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default DetalleVideo;
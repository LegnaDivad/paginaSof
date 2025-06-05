import "./MiPortafolio.css";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import {
  CalendarToday,
  EmojiEvents,
  Groups,
  Star,
  Person,
} from "@mui/icons-material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Layout from "../../components/Layout/Layout";
import MotionReveal from "../../components/animations/MotionReveal";

const MetricaCard = ({ icon, value, label, color }) => (
  <Box sx={{ textAlign: "center", minWidth: 120 }}>
    {icon}
    <Typography variant="h6" sx={{ color }}>
      {value}
    </Typography>
    <Typography variant="body2" sx={{ color }}>
      {label}
    </Typography>
  </Box>
);

function MiPortafolio() {
  return (
    <Layout>
      <Box sx={{ padding: 4 }}>
        <MotionReveal index={1}>
          <div className="mi-portafolio-header">
            <h1>Mi portafolio</h1>
            <p>
              ¡Bienvenido a tu portafolio! Aquí podrás ver tus proyectos y rutas
              formativas.
            </p>
          </div>
        </MotionReveal>

        {/* Usuario y Métricas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            justifyContent: "center",
            mb: 4,
          }}
        >
          {/* Usuario a la izquierda */}
          <Box sx={{ textAlign: "center", minWidth: 120 }}>
            <Person sx={{ fontSize: 60, color: "#FF004C" }} />
            <Typography variant="subtitle1" fontWeight="bold">
              Usuario
            </Typography>
          </Box>

          {/* Métricas centradas */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            <MetricaCard
              icon={<CalendarToday sx={{ color: "#FF9800", mb: 1 }} aria-label="Calendario" />}
              value={15}
              label="Días de racha"
              color="#FF9800"
            />
            <MetricaCard
              icon={<Groups sx={{ color: "#FF004C", fontSize: 40 }} aria-label="Grupos" />}
              value={3}
              label="Proyectos Activos"
              color="#FF004C"
            />
            <MetricaCard
              icon={<Star sx={{ color: "#FFC107", fontSize: 40 }} aria-label="Estrella" />}
              value={20}
              label="Ranking"
              color="#FFC107"
            />
          </Box>
        </Box>

        {/* Rutas Formativas */}
        <MotionReveal index={2}>
          <h2>Mis Rutas Formativas</h2>
          <Grid container spacing={2} mb={4}>
            <Grid item xs={6} md={3}>
              <Paper sx={{ backgroundColor: "#FFB127", p: 2 }}>
                <EmojiEvents fontSize="large" sx={{ color: "#fff" }} />
                <Typography fontWeight="bold">Challenges</Typography>
                <Typography variant="body2">
                  Continúa con tus 2 challenges
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ backgroundColor: "#FC7D04", p: 2 }}>
                <EmojiObjectsIcon fontSize="large" sx={{ color: "#fff" }} />
                <Typography fontWeight="bold">Innova CAD</Typography>
                <Typography variant="body2">Continúa innovando</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ backgroundColor: "#EA7064", p: 2 }}>
                <MenuBookIcon fontSize="large" sx={{ color: "#fff" }} />
                <Typography fontWeight="bold">Comunidad Normalista</Typography>
                <Typography variant="body2">
                  Explora más Comunidad Normalista
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} md={3}>
              <Paper sx={{ backgroundColor: "#C4DC2F", p: 2 }}>
                <AutoStoriesIcon fontSize="large" sx={{ color: "#fff" }} />
                <Typography fontWeight="bold">Fractal Educativo</Typography>
                <Typography variant="body2">
                  Explora Fractal Educativo
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </MotionReveal>

        {/* Proyectos */}
        <MotionReveal index={3}>
          <h2>Mis Proyectos</h2>
          <Grid container spacing={2}>
            {[{ title: "Aplicación de IA para el aula", tag: "Hoy" },
              { title: "Recurso abierto de historia", tag: "Hace 2 días" },
              { title: "Propuesta de Laboratorio", tag: "Hace 5 días" },
            ].map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ p: 2 }}>
                  <Typography fontWeight="bold">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.tag}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: "#FF004C",
                      borderRadius: "20px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#d60042" },
                    }}
                  >
                    Continuar
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </MotionReveal>
      </Box>
    </Layout>
  );
}

export default MiPortafolio;
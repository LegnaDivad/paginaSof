import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, InputAdornment, Grid, Chip, Button, Dialog, DialogContent, Tooltip, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Layout from '../../components/Layout/Layout';
import MotionReveal from '../../components/animations/MotionReveal';
import LineaDelTiempo from '../../components/animations/LineaDelTiempo';
import Adriana from '../../assets/adriana-villagomez.png';
import Carmen from '../../assets/carmen-pellicer.png';
import Jose from '../../assets/jose-martinez.png';
import Maria from '../../assets/maria-trinidad.png';
import Simon from '../../assets/simon-duque.png';
import CarruselHorizontal from '../../components/animations/CarruselHorizontal';
import { useNavigate } from 'react-router-dom';
import PonenteCard from '../../components/PonenteCard/PonenteCard';
import EdicionCard from "../../components/EdicionCard/EditionCard";

const Congreso = () => {
  const navigate = useNavigate();
  // IDs para el collage de videos
  const allYoutubeLiveIds = [
    '1S-XDcHJPBA', 'Zrcjl_FLn30', '87CMFz-mTC4', 'B6qaG5aEsb8', 'S7TPhQl0rOw',
    '74mIw7M4Z_I', 'cHlRSPYmVig', 'nSoXzyVWo0w', 'nSoXzyVWo0w', 'CS4CSCaQ2Kk',
    'B6qaG5aEsb8', 'S7TPhQl0rOw', '74mIw7M4Z_I', '74mIw7M4Z_I', 'nFe1xf4l-W8',
    'BYstZHut9CM', 'bIGCZU3Fk4c', '_aS6OOOFWDY', 'q9lRKa_xb7w', 'RGm-8tPfh4o'
  ];
  // Arreglo de ponentes destacados
  const ponentes = [
    {
      nombre: "Adriana Villagómez",
      imagen: Adriana,
      cita: "La tecnología debe servir como un puente hacia una educación más inclusiva."
    },
    {
      nombre: "Carmen Pellicer",
      imagen: Carmen,
      cita: "Educar con propósito transforma el futuro."
    },
    {
      nombre: "José Martínez",
      imagen: Jose,
      cita: "Innovar en el aula es construir esperanza."
    },
    {
      nombre: "Mariana Trinidad",
      imagen: Maria,
      cita: "La educación emocional es la base del aprendizaje integral."
    },
    {
      nombre: "Simón Duque",
      imagen: Simon,
      cita: "La inteligencia artificial puede ser una aliada del docente."
    }
  ];
  const timelineColors = ['#1F9CD0', '#02B6BD', '#FEB101', '#FE8A12', '#FE6F60', '#A3A804', '#E54EB5'];
  const timelineYears = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const youtubeIds = ['eleV4x9eEq0', 'cchEUhngvsM', 'iSCNO3AGkNg', 'BrCGHmITFdY', '0aVDBQucaKo'];

  const videosPorAno = {
    2018: ['eleV4x9eEq0'],
    2019: ['cchEUhngvsM'],
    2020: ['iSCNO3AGkNg'],
    2021: ['BrCGHmITFdY'],
    2022: ['0aVDBQucaKo'],
    2023: ['eleV4x9eEq0'],
    2024: ['cchEUhngvsM']
  };

  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleOpen = (id) => {
    setSelectedVideo(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  const ediciones = [
    {
      year: 2022,
      title: "IA en el Aula",
      image: Carmen,
      color: "#FE6F60"
    },
    {
      year: 2023,
      title: "Educación Emocional",
      image: Simon,
      color: "#1F9CD0"
    }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <MotionReveal index={1}>
          <Typography variant="h1" sx={{ fontWeight: 'bold', color: 'red' }}>Congreso</Typography>
        </MotionReveal>

        {/* Timeline */}
        <MotionReveal index={2}>
          <LineaDelTiempo onYearClick={setSelectedYear} selectedYear={selectedYear} />
        </MotionReveal>

        {/* Multimedia Content */}
        <MotionReveal index={3}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'red' }}>Contenido multimedia</Typography>
        </MotionReveal>

        <Box sx={{ mt: 4 }}>
          <CarruselHorizontal onClickVideo={(videoId) => navigate(`/congreso/detalle/${videoId}`)} />
        </Box>

       
            
        <MotionReveal index={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Chip label="IA" sx={{ backgroundColor: '#1F9CD0', color: 'white', fontWeight: 'bold' }} />
              <Chip label="Gamificación" sx={{ backgroundColor: '#3CB043', color: 'white', fontWeight: 'bold' }} />
              <Chip label="Neuroeducación" sx={{ backgroundColor: '#D32F2F', color: 'white', fontWeight: 'bold' }} />
            </Box>
            <TextField
              placeholder="Buscar"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              sx={{ width: 200 }}
            />
          </Box>
        </MotionReveal>

        {/* Nueva sección: Ediciones y Ponente destacado */}
        <MotionReveal index={5}>
          <Box sx={{ mt: 5 }}>
            {/* Contenido dividido */}
            <Grid container spacing={4}>
              {/* Ediciones */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  {ediciones.map((edicion, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <EdicionCard
                        year={edicion.year}
                        title={edicion.title}
                        image={edicion.image}
                        color={edicion.color}
                        path={`/detalle-edicion/${edicion.year}`}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Ponente destacado */}
              <Grid item xs={12} md={4}>
                <Typography variant="h6" fontWeight="bold">Ponente destacado</Typography>
                <Box sx={{ mt: 2 }}>
                  <PonenteCard
                    nombre={ponentes[0].nombre}
                    cita={ponentes[0].cita}
                    image={ponentes[0].imagen}
                    onClick={() => navigate(`/congreso/detalle/${ponentes[0].nombre.toLowerCase().replace(/\s+/g, '-')}`)}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MotionReveal>

      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ p: 0 }}>
          {selectedVideo && (
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Congreso;
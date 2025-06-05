import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import adriana from '../../assets/adriana-villagomez.png';
import carlos from '../../assets/carlos-anaya.png';
import carmen from '../../assets/carmen-pellicer.png';
import elisa from '../../assets/elisa-guerra.png';
import jose from '../../assets/jose-martinez.png';
import manuel from '../../assets/manuel-obrien.png';
import simon from '../../assets/simon-duque.png';

const PonenteCard = () => {
  const ponentes = [
    {
      image: adriana,
      name: 'Adriana Villagómez',
      quote: 'La inclusión es clave para el aprendizaje equitativo.'
    },
    {
      image: carlos,
      name: 'Carlos Anaya',
      quote: 'La educación es la herramienta más poderosa de transformación.'
    },
    {
      image: carmen,
      name: 'Carmen Pellicer',
      quote: 'Formar para el futuro empieza con la innovación de hoy.'
    },
    {
      image: elisa,
      name: 'Elisa Guerra',
      quote: 'La pasión por enseñar transforma generaciones.'
    },
    {
      image: jose,
      name: 'José Martínez',
      quote: 'El cambio educativo comienza con cada docente.'
    },
    {
      image: manuel,
      name: 'Manuel O’Brien',
      quote: 'Tecnología y humanidad: una dupla para el aula.'
    },
    {
      image: simon,
      name: 'Simón Duque',
      quote: 'La educación inclusiva es el pilar del futuro tecnológico.'
    }
  ];

  const randomIndex = Math.floor(Math.random() * ponentes.length);
  const { image, name, quote } = ponentes[randomIndex];

  return (
    <Box
      sx={{
        maxWidth: 300,
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        bgcolor: '#fff',
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block'
        }}
      />
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          “{quote}”
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, bgcolor: '#e91e63', color: '#fff', '&:hover': { bgcolor: '#d81b60' } }}
        >
          VER SU CHARLA
        </Button>
      </Box>
    </Box>
  );
};

export default PonenteCard;
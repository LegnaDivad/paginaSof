

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ResumenRankingDerecha = () => {
  return (
    <Box sx={{ pl: 4 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: '#fffdf7' }}>
        <Typography variant="h6" fontWeight="bold" color="#FC083B" gutterBottom>
          Resumen General
        </Typography>
        <Typography variant="body1">
          Total de participantes: <strong>12</strong>
        </Typography>
        <Typography variant="body1">
          Promedio de desempeño: <strong>82%</strong>
        </Typography>
        <Typography variant="body1">
          Mayor puntuación: <strong>97%</strong>
        </Typography>
        <Typography variant="body1">
          Menor puntuación: <strong>65%</strong>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ResumenRankingDerecha;
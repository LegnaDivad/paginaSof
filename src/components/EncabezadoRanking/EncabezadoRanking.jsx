

import React from 'react';
import { Typography, Box } from '@mui/material';

const EncabezadoRanking = () => {
  return (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" color="#FC083B">
        Ranking de Participantes
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Consulta el desempeño de cada integrante
      </Typography>
    </Box>
  );
};

export default EncabezadoRanking;
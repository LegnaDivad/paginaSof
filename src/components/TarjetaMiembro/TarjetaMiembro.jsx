import React from 'react';
import { Card, CardContent, Box, Typography, Avatar, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';

const generarMiembros = () => {
  const nombres = ['Ana', 'Luis', 'Carlos', 'Valeria', 'Marcos', 'Sofía', 'Elena'];
  return Array.from({ length: 6 }, (_, i) => ({
    nombre: nombres[Math.floor(Math.random() * nombres.length)],
    porcentaje: Math.floor(Math.random() * 40) + 60,
    medalla: ['🥇', '🥈', '🥉'][i] || '',
    destacado: i === 0
  }));
};

const TarjetaMiembro = () => {
  const miembros = generarMiembros();

  return (
    <Box sx={{ maxWidth: '70%', mr: 'auto' }}>
      {miembros.map((miembro, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Card
            variant="outlined"
            sx={{
              mb: 2,
              width: '100%',
              borderColor: miembro.destacado ? 'orange' : '#e0e0e0',
              boxShadow: miembro.destacado ? '0 0 12px rgba(255,165,0,0.3)' : '',
              borderWidth: miembro.destacado ? '2px' : '1px',
              backgroundColor: miembro.destacado ? '#fffdf7' : '#fff',
            }}
          >
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography fontSize="1.8rem" sx={{
                color:
                  miembro.medalla === '🥇' ? '#FFD700' :
                  miembro.medalla === '🥈' ? '#C0C0C0' :
                  miembro.medalla === '🥉' ? '#CD7F32' :
                  'inherit'
              }}>
                {miembro.medalla}
              </Typography>
              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2, bgcolor: '#ccc' }} />
                  <Typography fontWeight={miembro.destacado ? 'bold' : 'normal'}>
                    {miembro.nombre}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    {miembro.porcentaje}%
                  </Typography>
                  <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
};

export default TarjetaMiembro;
import React from 'react';
import { Card, CardContent, Box, Typography, Avatar, IconButton, LinearProgress } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';

const TarjetaMiembro = ({ miembro, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      style={{ marginBottom: '16px' }}
    >
      <Card
        variant="outlined"
        sx={{
          width: '100%',
          borderColor: miembro.destacado ? 'orange' : '#e0e0e0',
          boxShadow: miembro.destacado ? '0 0 12px rgba(255,165,0,0.3)' : '',
          borderWidth: miembro.destacado ? '2px' : '1px',
          backgroundColor: miembro.destacado ? '#fffdf7' : '#fff'
        }}
      >
        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            fontSize="1.8rem"
            sx={{
              color:
                miembro.medalla === '🥇'
                  ? '#FFD700'
                  : miembro.medalla === '🥈'
                  ? '#C0C0C0'
                  : miembro.medalla === '🥉'
                  ? '#CD7F32'
                  : 'inherit'
            }}
          >
            {miembro.medalla}
          </Typography>
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ mr: 2, bgcolor: '#ccc' }} />
              <Typography fontWeight={miembro.destacado ? 'bold' : 'normal'}>
                {miembro.nombre}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
              <Typography variant="body2" sx={{ width: 32 }}>
                {miembro.porcentaje}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={miembro.porcentaje}
                sx={{
                  flexGrow: 1,
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: '#f1f5f9',
                  '& .MuiLinearProgress-bar': {
                    backgroundImage: 'linear-gradient(90deg,#E54EB5,#FEB101)'
                  }
                }}
              />
              <IconButton size="small">
                <ArrowForwardIosIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TarjetaMiembro;

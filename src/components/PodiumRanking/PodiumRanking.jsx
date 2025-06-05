import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import './PodiumRanking.css';

const PodiumRanking = ({ miembros }) => {
  const orden = [1, 0, 2]; // segundo, primero, tercero
  const colores = ['#C0C0C0', '#FFD700', '#CD7F32'];

  return (
    <Box className="podium-container">
      {orden.map((pos, idx) => {
        const m = miembros[pos];
        if (!m) return null;
        const altura = m.porcentaje * 1.5;
        return (
          <Box
            key={m.nombre}
            className="podium"
            component={motion.div}
            whileHover={{ y: -6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 + 0.4 }}
            >
              <Typography fontSize="1.8rem">{m.medalla}</Typography>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.2 + 0.5 }}
            >
              <Avatar sx={{ bgcolor: '#ccc', width: 48, height: 48, mb: 1 }} />
            </motion.div>
            <motion.div
              className="podium-bar"
              style={{ backgroundColor: colores[idx] }}
              initial={{ height: 0 }}
              animate={{ height: altura }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
            />
            <Typography
              variant="body2"
              sx={{ mt: 1, fontWeight: 500, textAlign: 'center' }}
            >
              {m.nombre}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default PodiumRanking;

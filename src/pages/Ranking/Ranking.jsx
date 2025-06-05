import React from 'react';
import {
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import './Ranking.css';
import Layout from '../../components/Layout/Layout';
import medalla from '../../assets/medalla.png';
import EncabezadoRanking from '../../components/EncabezadoRanking/EncabezadoRanking';
import ListaMiembrosAnimada from '../../components/ListaMiembrosAnimada/ListaMiembrosAnimada';
import ResumenRankingDerecha from '../../components/ResumenRankingDerecha/ResumenRankingDerecha';

const miembros = [
  { nombre: 'Luis Castañeda', porcentaje: 78 },
  { nombre: 'Sofia Castellanos', porcentaje: 82, destacado: true },
  { nombre: 'Alejandra Sánchez', porcentaje: 69 },
]
  .sort((a, b) => b.porcentaje - a.porcentaje)
  .map((m, i) => ({
    ...m,
    medalla: i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : ''
  }));

const Ranking = () => {
  return (
    <Layout>
      <Box sx={{ px: 4, py: 3, position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" fontWeight="bold">Brújula Creativa</Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium" sx={{ color: '#FC083B' }}>Proyectos Activos</Typography>
              <Typography variant="h6" fontWeight="bold">16</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body2" fontWeight="medium" sx={{ color: '#FB8C00' }}>Próximos Proyectos</Typography>
              <Typography variant="h6" fontWeight="bold">08</Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#ccc', width: 40, height: 40 }} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, mb: 3 }}>
          <h1>Ranking</h1>
          <Box>
            <Typography variant="body2" fontWeight="medium">Integrantes del equipo (26)</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} sx={{ width: 30, height: 30, bgcolor: '#ddd' }} />
              ))}
              <Box sx={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                bgcolor: 'orange',
                color: '#fff',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                20+
              </Box>
            </Box>
          </Box>
        </Box>

        <EncabezadoRanking />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListaMiembrosAnimada miembros={miembros} medalla={medalla} />
          <ResumenRankingDerecha miembros={miembros} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Ranking;
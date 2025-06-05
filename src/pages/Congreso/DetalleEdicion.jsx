import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { Box, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';

const DetalleEdicion = () => {
  const { year } = useParams();

  // Simulated dynamic content based on year
  const edicionesInfo = {
    2022: {
      title: 'IA en el Aula',
      description: 'Exploramos el impacto de la inteligencia artificial en el entorno educativo, con ponentes internacionales y experiencias inmersivas.',
      image: require('../../assets/carmen-pellicer.png')
    },
    2023: {
      title: 'Educación Emocional',
      description: 'Una edición centrada en la importancia del bienestar emocional en el aprendizaje y la enseñanza.',
      image: require('../../assets/simon-duque.png')
    }
  };

  const edicion = edicionesInfo[year] || {
    title: 'Edición Desconocida',
    description: 'No hay información disponible para esta edición.',
    image: require('../../assets/carlos-anaya.png')
  };

  return (
    <Layout>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Edición {year}: {edicion.title}
        </Typography>
        <Card sx={{ display: 'flex', flexDirection: ['column', 'row'], mt: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: ['100%', '40%'], height: 'auto', objectFit: 'cover' }}
            image={edicion.image}
            alt={`Imagen de la edición ${year}`}
          />
          <CardContent>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {edicion.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default DetalleEdicion;
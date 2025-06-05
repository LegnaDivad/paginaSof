import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EdicionCard = ({ image, year, title, color = '#F44336' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edicion/${year}`);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: 300,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        mb: 4,
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.03)'
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: 180,
            objectFit: 'cover'
          }}
        />
        <Chip
          label={`Edición ${year}`}
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            backgroundColor: color,
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px'
          }}
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          Edición <Chip label={year} size="small" sx={{ backgroundColor: color, color: 'white', ml: 1 }} />
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Box>
  );
};

export default EdicionCard;
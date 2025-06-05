import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  { id: 'Zrcjl_FLn30', color: '#1F9CD0' },
  { id: 'cHlRSPYmVig', color: '#02B6BD' },
  { id: 'nSoXzyVWo0w', color: '#FEB101' },
  { id: 'aAkmFEhYONE', color: '#FE8A12' },
  { id: 'Bfi2oYWEeKI', color: '#FE6F60' },
  { id: 'B6qaG5aEsb8', color: '#A3A804' },
  { id: 'fallback', color: '#E54EB5' },
];

const Congreso = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopping, setIsPopping] = useState(null);

  const handleSmallBoxClick = (video, index) => {
    setIsPopping(index);
    setTimeout(() => {
      setSelectedVideo(video);
      setIsPopping(null);
    }, 300); // duration of pop animation
  };

  return (
    <Box sx={{ py: 4 }}>
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            key="large-preview"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Box
              sx={{
                width: '640px',
                height: '360px',
                position: 'relative',
                mx: 'auto',
                mb: 4,
                backgroundColor: selectedVideo.color,
                borderRadius: 4,
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/congreso/detalle/${selectedVideo.color.replace('#', '')}`)}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  px: 2,
                }}
              >
                Este es un ejemplo de video del Congreso. Haz clic para ver más detalles.
              </Typography>
              <Box
                sx={{
                  position: 'absolute',
                  width: 64,
                  height: 64,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Typography variant="h4" sx={{ color: '#fff' }}>▶</Typography>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel of color blocks */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          px: 2,
        }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
          >
            <motion.div
              onClick={() => handleSmallBoxClick(video, index)}
              animate={isPopping === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{ display: 'inline-block' }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: video.color,
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: '2px solid white',
                  mx: 1,
                  position: 'relative',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: '#fff', fontSize: '0.6rem', textAlign: 'center', lineHeight: 1.2 }}
                >
                  Haz click para<br /> ver qué sucede
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: '#fff', fontWeight: 'bold', mt: 0.5 }}
                >
                  Video {index + 1}
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    width: 20,
                    height: 20,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#fff' }}>▶</Typography>
                </Box>
              </Box>
            </motion.div>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Congreso;
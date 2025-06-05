

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

const LineaDelTiempo = ({ onYearClick, selectedYear }) => {
  return (
    <Box sx={{ width: '100%', mt: 4, mb: 6 }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
        style={{
          height: '4px',
          background: 'linear-gradient(to right, #00B8D9, #A3A804, #FEB101, #FE8A12, #FE6F60, #E54EB5, #C147E9)',
          position: 'relative',
          margin: '0 auto',
        }}
      >
        {years.map((year, index) => (
          <motion.div
            key={year}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              position: 'absolute',
              top: '-10px',
              left: `${(index / (years.length - 1)) * 100}%`,
              transform: 'translateX(-50%)',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            onClick={() => onYearClick(year)}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: selectedYear === year ? '#02B6BD' : '#fff',
                border: '2px solid #02B6BD',
                margin: '0 auto',
              }}
            />
            <Typography
              variant="caption"
              sx={{ mt: 1, color: '#333', fontSize: '0.7rem', display: 'block' }}
            >
              {year}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default LineaDelTiempo;
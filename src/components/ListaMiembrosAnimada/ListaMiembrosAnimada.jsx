

import React from 'react';
import TarjetaMiembro from '../TarjetaMiembro/TarjetaMiembro';

const ListaMiembrosAnimada = ({ miembros, medalla }) => {
  return (
    <>
      {miembros.map((miembro, index) => (
        <TarjetaMiembro
          key={index}
          index={index}
          miembro={miembro}
          medalla={medalla}
        />
      ))}
    </>
  );
};

export default ListaMiembrosAnimada;
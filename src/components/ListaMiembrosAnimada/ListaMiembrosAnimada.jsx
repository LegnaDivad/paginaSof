

import React from 'react';
import TarjetaMiembro from '../TarjetaMiembro/TarjetaMiembro';

const ListaMiembrosAnimada = ({ miembros }) => {
  return (
    <>
      {miembros.map((miembro, index) => (
        <TarjetaMiembro key={index} index={index} miembro={miembro} />
      ))}
    </>
  );
};

export default ListaMiembrosAnimada;
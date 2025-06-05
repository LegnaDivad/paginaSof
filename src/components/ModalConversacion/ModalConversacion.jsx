import './ModalConversacion.css';
import { Button } from '@mui/material';


import RAinput from "../../components/form/RAinput";
import RAtextarea from "../../components/form/RAtextarea";

const ModalConversacion = ({ isOpen, onClose, onStartConversation, nuevoTitulo, setNuevoTitulo, nuevoMensaje, setNuevoMensaje }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Iniciar nueva conversación</h2>
        <RAinput
          label="Título"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <RAtextarea
          label="Mensaje"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
        />
        <div className="modal-actions">
          <Button variant="contained" color="primary" onClick={onStartConversation}>
            Iniciar
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalConversacion;
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton
} from "@mui/material";
import RAinput from "../components/form/RAinput";
import RAselect from "../components/form/RAselect";
import { getRecord, getTable, updateRecord } from "../utils/db";
import { useGetUser } from "../hooks/useGetUser";

const DEFAULT_USER = {
  contrasena: "",
  correo: "",
  fecha_registro: "2025/05/30",
  id_usuario: 0,
  institucion_id: 1,
  nivel_educativo_id: 1,
  nombre: "",
  tipo: 1
};

export default function CuentaModal({ open, onClose }) {
  const [datos, setDatos] = useState(DEFAULT_USER);
  const [insitituciones, setInsitituciones] = useState(undefined);
  const [niveles, setNiveles] = useState(undefined);
  const { user } = useGetUser();

  const updateSupa = async () => {
    await updateRecord("usuarios", datos, { correo: user?.email })
    onClose()
  };

  const getIntsOptions = () =>
    insitituciones?.map((i) => ({ value: i.id_institucion, label: i.nombre }));

  const getNivelesOptions = () =>
    niveles?.map((i) => ({ value: i.id_nivel_educativo, label: i.nombre }));

  const getNiveles = useCallback(async () => {
    const niv = await getTable("niveles_educativos");
    setNiveles(niv);
  }, []);

  const getInstituciones = useCallback(async () => {
    const inst = await getTable("instituciones");
    setInsitituciones(inst);
  }, []);

  const getUser = useCallback(async () => {
    if (user?.email) {
      const usr = await getRecord("usuarios", "correo", user?.email);
      if (usr) setDatos(usr);
      console.log('entre')
    }
  }, [user?.email]);

  useEffect(() => {
    if (user?.email) {
      getUser();
      getInstituciones();
      getNiveles();
    }
  }, [getUser, getNiveles, getInstituciones, user?.email]);

  const handleChange = (e) => {
    const newDatos = datos;
    newDatos[e.target.name] = e.target.value;
    console.log('nuevos: ', newDatos)
    setDatos(newDatos)
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          component: "form",
        },
      }}
    >
      <DialogTitle>Cuenta de Usuario</DialogTitle>
      <DialogContent>

        {
          (!datos.correo) ?
            <>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </>
            :
            <>
              <RAinput
                autoFocus
                required
                label="Nombre"
                name="nombre"
                value={datos?.nombre}
                onChange={handleChange}
              />
              <RAinput
                required
                name="correo"
                label="Correo"
                type="email"
                value={datos?.correo}
                onChange={handleChange}
              />
              <RAselect
                required
                name="institucion_id"
                label="Institución"
                value={datos?.institucion_id}
                options={getIntsOptions()}
                onChange={handleChange}
              />
              <RAselect
                required
                name="nivel_educativo_id"
                label="Nivel Educativo"
                value={datos?.nivel_educativo_id}
                options={getNivelesOptions()}
                onChange={handleChange}
              />
            </>
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button type="button" onClick={updateSupa}>
          Actualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

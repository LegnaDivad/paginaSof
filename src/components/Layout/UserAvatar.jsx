import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Avatar,
  Menu,
  MenuItem,
  Stack,
  Divider
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useGetUser } from "../../hooks/useGetUser";
import CuentaModal from '../../components/CuentaModal';
import { getRecord, getTable, createRecord, updateRecord } from "../../utils/db";

const ABRE_CUENTA = 'abreCuenta';

export default function UserAvatar() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useGetUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (url) => {
    if (url === ABRE_CUENTA) {
      handleOpenModal();
      return;
    }
    navigate(url);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const verifyUser = async (email) => {
    const usr = await getRecord('usuarios', 'correo', email);
    if (!usr) {
      createRecord('usuarios', {
        contrasena: "",
        correo: email,
        fecha_registro: "2025/05/30",
        institucion_id: 1,
        nivel_educativo_id: 1,
        nombre: user?.name,
        tipo: 1
      })
    }
  };

  useEffect(() => {
    if (user?.email && location.pathname === '/') {
      verifyUser(user?.email);
    }
  }, [location.pathname, user?.email]);

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="end">
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt={user?.name}
          src="/broken-image.jpg"
          onClick={handleClick}
        />

        <Menu
          id="basic-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          {user?.email ? (
            <>
              <MenuItem onClick={() => handleMenuClick(ABRE_CUENTA)}>
                {user?.email}
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => handleMenuClick("/logout")}>
                Logout
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => handleMenuClick("/login")}>
                Login
              </MenuItem>
            </>
          )}
        </Menu>
      </Stack>
      { openModal && <CuentaModal open={openModal} onClose={handleCloseModal} />} 
    </>
  );
}

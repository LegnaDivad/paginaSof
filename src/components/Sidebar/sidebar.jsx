import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import { Typography } from "@mui/material";
import UserAvatar from "../Layout/UserAvatar";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useResponsive } from '../../hooks/useResponsive'

import RecreaLogo from "../../assets/RecreaLogo.png";
import {
  Box
} from "@mui/material";

import "./sidebar.css";


const Sidebar = () => {
  const [openMenu, setOpenMemu] = useState(false);
  const { size } = useResponsive();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleOpenMenu = () => {
    setOpenMemu(!openMenu)
  } 

  const getOptions = () => (
  <nav className="menu">
    <ul>
      <li>
        <Link to="/" className={isActive("/") ? "active" : ""}>
          <span className="material-symbols-outlined">home</span>
          <Typography sx={{ m: 2 }}>Inicio</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="/congreso"
          className={isActive("/congreso") ? "active" : ""}
        >
          <span className="material-symbols-outlined">hub</span>
          <Typography sx={{ m: 2 }}>Congreso</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="/rutas-formativas"
          className={isActive("/rutas-formativas") ? "active" : ""}
        >
          <span className="material-symbols-outlined">route</span>
          <Typography sx={{ m: 2 }}>Rutas Formativas</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="/innovaciones"
          className={isActive("/innovaciones") ? "active" : ""}
        >
          <span className="material-symbols-outlined">rocket</span>
          <Typography sx={{ m: 2 }}>Innovaciones</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="/colaboraciones"
          className={isActive("/colaboraciones") ? "active" : ""}
        >
          <span className="material-symbols-outlined">groups</span>
          <Typography sx={{ m: 2 }}>Colaboraciones</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="/ranking"
          className={isActive("/ranking") ? "active" : ""}
        >
          <span className="material-symbols-outlined">star_rate</span>
          <Typography sx={{ m: 2 }}>Ranking</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="/eventos"
          className={isActive("/eventos") ? "active" : ""}
        >
          <span className="material-symbols-outlined">calendar_month</span>{" "}
          <Typography sx={{ m: 2 }}>Eventos</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="/comunidad"
          className={isActive("/comunidad") ? "active" : ""}
        >
          <span className="material-symbols-outlined">forum</span>
          <Typography sx={{ m: 2 }}>Comunidad Recrea</Typography>
        </Link>
      </li>
      <li>
        <Link
          to="/mi-portafolio"
          className={isActive("/mi-portafolio") ? "active" : ""}
        >
          <span className="material-symbols-outlined">work</span>
          <Typography sx={{ m: 2 }}>Mi Portafolio</Typography>
        </Link>
      </li>
    </ul>
  </nav>
);


  if (size === 'mobile') {
    return (
      <AppBar position="static" color="white">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Box justifyContent='space-between' display='flex' flexDirection='row' width='100%' alignItems='center'>
            <img src={RecreaLogo} width={153.12} height={60.96} />{" "}
            <UserAvatar />
          </Box>
        </Toolbar>
        {openMenu && getOptions()}
      </AppBar>
    );
  }

  return (
    <Box minWidth='250px'>
      <div className="logo">
        <img src={RecreaLogo} width={153.12} height={60.96} />{" "}
        {/* Cambia la ruta de la imagen según sea necesario */}
      </div>
      {getOptions()}
    </Box>
  );
};

export default Sidebar;

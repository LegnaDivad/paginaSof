import UserAvatar from "./UserAvatar";
import Sidebar from "../Sidebar/sidebar";
import { useResponsive } from '../../hooks/useResponsive'
import {
  Box
} from "@mui/material";
import "./Layout.css";

const Layout = ({ children }) => {
  const { size } = useResponsive();
  return (
    <Box display='flex' flexDirection={size === 'mobile' ? 'column' : 'row'} fontFamily='Roboto, sans-serif' width='100%'>
      <Sidebar />
      <Box width='100%'>
        {
          size !== 'mobile' && <UserAvatar /> 
        }        
        <div className="content-container">
          {children}
        </div>
      </Box>
    </Box>
  );
};

export default Layout;
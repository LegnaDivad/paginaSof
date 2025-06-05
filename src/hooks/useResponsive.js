
import { useMediaQuery } from "@mui/material";

export const useResponsive = () => {
    const matches = useMediaQuery('(max-width:1000px)');
    return { size: matches ? 'mobile' : 'regilar' };
} 
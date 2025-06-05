import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function UserProfileDialog({ open, onClose, user }) {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (!user) return;
    setIsFollowing(false); // reset on user change
  }, [user]);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} transitionDuration={300}>
      <DialogTitle sx={{ textAlign: "center" }}>{user.name}</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            width: "120px",
            height: "120px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            margin: "0 auto 20px",
            overflow: "hidden",
          }}
        >
          <img
            src={user.avatar}
            alt={`Avatar de ${user.name}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Typography sx={{ textAlign: "center", fontWeight: "bold", mb: 1 }}>
          {user.description}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between", px: 3 }}>
        <Button onClick={onClose} sx={{ color: "#FC083B" }}>
          Cerrar
        </Button>
        <Tooltip title={isFollowing ? "Siguiendo" : "Seguir"}>
          <IconButton
            onClick={handleFollowClick}
            sx={{
              color: isFollowing ? "#4CAF50" : "#FC083B",
              backgroundColor: isFollowing ? "#E8F5E9" : "#FFF0F4",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: isFollowing ? "#C8E6C9" : "#FFDDE4",
              },
            }}
          >
            {isFollowing ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
}

export default UserProfileDialog;

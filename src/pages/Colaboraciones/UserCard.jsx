import React from "react";

function UserCard({ color, onClick }) {
  return (
    <div
      className="user-card"
      style={{ backgroundColor: color }}
      tabIndex="0"
      role="button"
      aria-label={`Perfil del usuario con color ${color}`}
      onClick={onClick}
    >
      <div className="user-icon">👤</div>
      <div className="user-name">Usuario</div>
    </div>
  );
}



export default UserCard;

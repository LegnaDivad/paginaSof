import React, { useState } from "react";
import UserCard from "./UserCard";
import UserProfileDialog from "./UserProfileDialog";

const users = [
  {
    id: 1,
    name: "Ana Torres",
    description: "Docente de primaria con enfoque en inclusión digital.",
    color: "#FFB127",
    avatar: "https://ui-avatars.com/api/?name=Ana+Torres",
  },
  {
    id: 2,
    name: "Luis Ramírez",
    description: "Especialista en matemáticas aplicadas a nivel secundaria.",
    color: "#FC7D04",
    avatar: "https://ui-avatars.com/api/?name=Luis+Ramirez",
  },
  {
    id: 3,
    name: "Elena Gómez",
    description: "Profesora de ciencias sociales y fomento a la lectura.",
    color: "#4CAF50",
    avatar: "https://ui-avatars.com/api/?name=Elena+Gomez",
  },
  {
    id: 4,
    name: "Carlos Vargas",
    description: "Instructor de programación y robótica para jóvenes.",
    color: "#2196F3",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Vargas",
  },
  {
    id: 5,
    name: "Sofía Castro",
    description: "Orientadora vocacional y tutora de bachillerato.",
    color: "#9C27B0",
    avatar: "https://ui-avatars.com/api/?name=Sofia+Castro",
  },
  {
    id: 6,
    name: "Javier Mendoza",
    description: "Coordinador de actividades extraescolares y deportes.",
    color: "#E91E63",
    avatar: "https://ui-avatars.com/api/?name=Javier+Mendoza",
  },
];

function UserCarousel() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[...users, ...users].map((user, index) => (
            <UserCard
              key={`${user.id}-${index}`}
              color={user.color}
              onClick={() => handleClick(user)}
            />
          ))}
        </div>
      </div>

      <UserProfileDialog
        open={Boolean(selectedUser)}
        onClose={() => setSelectedUser(null)}
        user={selectedUser}
      />
    </>
  );
}

export default UserCarousel;
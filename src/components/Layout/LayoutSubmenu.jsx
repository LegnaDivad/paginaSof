import UserAvatar from "./UserAvatar";
import Sidebar from "../Sidebar/sidebar";
import "./LayoutSubmenu.css";

const LayoutSubmenu = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <UserAvatar /> 
        <div className="content-container">
          {children}
        </div>
      </main>
    </>
  );
};

export default LayoutSubmenu;
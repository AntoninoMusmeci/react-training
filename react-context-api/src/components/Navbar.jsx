import NavLinks from "./NavLinks";
import { useState, createContext, useContext } from "react";
import "../app.css";

// custom hook

export const useAppContext = function () {
  return useContext(NavBarContext);
};

export const NavBarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState("Nino");
  function logout() {
    setUser(null);
  }
  function login() {
    setUser("Nino");
  }
  return (
    <NavBarContext.Provider value={{ user, logout, login }}>
      <nav className="navbar">
        <p> TEST CONTEXT API</p>
        <NavLinks />
      </nav>
    </NavBarContext.Provider>
  );
};

export default Navbar;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>react-router</h1>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="about">About </NavLink>
          <NavLink to="careers"> Careers </NavLink>
          <NavLink to="help">Help </NavLink>
        </nav>
        <Breadcrumbs/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

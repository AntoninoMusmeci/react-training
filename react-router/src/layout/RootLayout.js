import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useUser, useUsersDispatch } from "../context/userContext";
const RootLayout = () => {
  const dispatch = useUsersDispatch();
  const user = useUser();
  return (
    <div>
      <header>
        <nav>
          <h1>react-router</h1>
          {!user?.name ? (
            
            <button
              onClick={() => {
          
                dispatch({
                  type: "login",
                });
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({
                  type: "logout",
                });
              }}
            >{`Hi ${user.name} Logout`}</button>
          )}
          <NavLink to="/"> Home </NavLink>
          <NavLink to="about">About </NavLink>
          <NavLink to="careers"> Careers </NavLink>
          <NavLink to="help">Help </NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

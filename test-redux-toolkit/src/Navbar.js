import React from "react";
import User from "./User";
import { useSelector } from "react-redux";
function Navbar() {
  const user = useSelector((state) => state.account.account);
  return (
    <nav>
      {console.log(user, user.username)}
      <h1> Hello {user.username}</h1>
    </nav>
  );
}

export default Navbar;

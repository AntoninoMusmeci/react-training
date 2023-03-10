// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "./features/userSlice";
// function User() {
//   let { id } = useParams();
//   const user = useSelector((state) => state.user.data);
//   const errors = useSelector((state) => state.user.errors);
//   const status = useSelector((state) => state.user.status);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUser(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     console.log("utenti", user);
//   }, [user]);

//   useEffect(() => {
//     if (status === "failed") alert(errors["error"]);
//   }, [errors, status]);
//   return (
//     <div>
//       <h1> User </h1>
//       <p> Code {id} </p>
//       <p> Name: {user.name} </p>
//       <p> Email: {user.email} </p>
//     </div>
//   );
// }

// export default User;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function User() {
  const user = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  return (
    <div>
      <h1> User </h1>
      <p> Name: {user.name} </p>
      <p> Email: {user.email} </p>
    </div>
  );
}

export default User;

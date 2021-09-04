import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./features/userSlice";
function Users() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.user.data);
  return (
    <div>
      <h1> Users </h1>
      {console.log(users)}
      {users.map(({ name, email }) => (
        <div>
          <p>Name: {name} </p>
          <p>Email: {email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;

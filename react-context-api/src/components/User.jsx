
import "../app.css";
import { useAppContext } from "./Navbar";

const User = () => {
  const { user, logout, login } = useAppContext();
 
  return user ? (
    <div className="navlink">
      <p> {`Hello ${user}`}</p>
      <button onClick={logout}> Logout </button>
    </div>
  ) : (
    <button onClick={login}> Login </button>
  );
};

export default User;

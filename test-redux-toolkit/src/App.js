import CreateUsers from "./CreateUser";
import "./App.css";
import Room from "./User";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Users from "./Users";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
function App() {
  return (
    <Provider store={store}>
      <div classNae="App">
        <Router>
          <Switch>
            <Route path="/login">
              <Navbar />
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegistrationPage />
            </Route>
            <Route path="/user/:id">
              <Room />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <h1> App </h1>
              <Link to="/register">
                <button> Create Account</button>
              </Link>
              <Link to="/login">
                <button> Login </button>
              </Link>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

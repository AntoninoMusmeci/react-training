import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>"react-router"</h1>
        <NavLink to="/"> Home </NavLink>
        <NavLink to ="about">About </NavLink>
      </nav>
    </header>
      <main>
        <h1> Hi </h1>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

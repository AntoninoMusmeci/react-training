// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
//Layout
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
function App() {
  return (

    // <BrowserRouter>
    // <header>
    //   <nav>
    //     <h1>"react-router"</h1>
    //     <NavLink to="/"> Home </NavLink>
    //     <NavLink to ="about">About </NavLink>
    //   </nav>
    // </header>
    //   <main>
    //     <h1> Hi </h1>
    //     <Routes>
    //       <Route index element={<Home/>} />
    //       <Route path="about" element={<About/>} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>

    <RouterProvider router = {router} />
  );
}

export default App;

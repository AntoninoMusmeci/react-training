// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { UserProvider } from "./context/userContext";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import NotFound from "./pages/NotFound";
import CarrearsDetails, {
  careerDetailsLoader,
} from "./pages/careers/CarrearsDetails";
import CareerError from "./pages/careers/CareerError";
//Layout
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import CareersLayout from "./layout/CareersLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action = {contactAction}/>
      </Route>
      <Route path="careers" element={<CareersLayout/>} errorElement={<CareerError/>}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader} 
        />
        <Route
          path=":id"
          element={<CarrearsDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
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
    <UserProvider>
         <RouterProvider router={router} />
    </UserProvider>
 
  );
}

export default App;

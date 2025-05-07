import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/navbar.jsx";
import Design from "./components/Design.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>

      
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Design />
    </>
  </StrictMode>
);

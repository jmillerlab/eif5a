import "./App.css";
import Navbar from "./NavBar";
import About from "./WebPages/AboutPage";
import HomePage from "./WebPages/HomePage";
import Publications from "./WebPages/Publications";
import Visualize from "./WebPages/Visualize";
import HomeFooter from "./homeComponents/HomeFooter";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import ContactSection from "./ContactSection";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <AnimatePresence initial={false}>
                <HomePage key={location} />
              </AnimatePresence>
            }
          />
          <Route
            path="/about"
            element={
              // <div className="image">
              <AnimatePresence initial={false}>
                <About />
              </AnimatePresence>
              // </div>
            }
          />
          <Route
            path="/studies"
            element={
              <AnimatePresence initial={false}>
                <Publications />
              </AnimatePresence>
            }
          />
          <Route
            path="/visualize"
            element={
              <AnimatePresence initial={false}>
                <Visualize key={location} />
              </AnimatePresence>
            }
          />
        </Routes>
      </div>
      <ContactSection />
      <HomeFooter />
    </>
  );
}

export default App;

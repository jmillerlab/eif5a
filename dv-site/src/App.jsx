import "./App.css";

import Navbar from "./NavBar";
import About from "./WebPages/About";
import HomePage from "./HomePage";
import Studies from "./WebPages/Studies";
import TheLab from "./WebPages/TheLab";
import Visualize from "./WebPages/visualizePage/Visualize";
import HomeFooter from "./homeComponents/HomeFooter";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="image">
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/studies" element={<Studies />} />
          {/*           
          <Route path="/thelab" element={<TheLab />} />
           */}
          <Route path="/visualize" element={<Visualize />} />
        </Routes>
        <HomeFooter />
      </div>
    </>
  );
}

export default App;

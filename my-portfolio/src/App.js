import "./App.css";
import "./css/Nav.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MobileNav from "./components/MobileNav.js";
import DesktopNav from "./components/DesktopNav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";

function App() {
  return (
    <div className="App">
      <Router>
        <DesktopNav />
        <MobileNav />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

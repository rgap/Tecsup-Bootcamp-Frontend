import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "../components/About.jsx";
import Home from "../components/Home.jsx";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";

/**
 * AppRouter function component that defines the routing behavior and navigation links for the app.
 * @returns {JSX.Element} The set of Routes and Links wrapped in a BrowserRouter.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Navigation links to switch between pages */}
      <nav>
        <ul>
          {/* Link to the Home page */}
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Link to the About page */}
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* The `Routes` component is a wrapper for one or more `Route` components. */}
      <Routes>
        {/* Route definitions */}
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

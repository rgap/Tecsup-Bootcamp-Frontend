import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";

/**
 * AppRouter function component that defines the routing behavior for the app.
 * @returns {JSX.Element} The set of Routes wrapped in a BrowserRouter.
 */
export default function AppRouter() {
  return (
    // Wrapping our Routes within the `BrowserRouter` component
    // allows us to use the HTML5 history API for navigation.
    <BrowserRouter>
      {/* The `Routes` component is a wrapper for one or more `Route` components. */}
      <Routes>
        {/* A `Route` component describes the mapping between a URL path and a React component.
             When the URL matches the specified path, the associated component is rendered. */}

        {/* If the path is '/about', the About component is rendered */}
        <Route path="/about" element={<About />} />

        {/* If the path is '/', the Home component is rendered.
             This is typically the default or main page of the app. */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

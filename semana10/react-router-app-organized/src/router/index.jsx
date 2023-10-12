import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "../layouts";
import { About, Home } from "../pages";

/**
 * AppRouter function component that defines the routing behavior and navigation links for the app.
 * @returns {JSX.Element} The set of Routes and Links wrapped in a BrowserRouter.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* The `Routes` component is a wrapper for one or more `Route` components. */}
      <Routes>
        {/* Route definitions */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { Detail, Home } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detalle/:titleId" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

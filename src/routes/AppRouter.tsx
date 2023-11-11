import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRouter } from ".";
import { Home } from "../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/*" element={<PrivateRouter />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

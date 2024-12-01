// src/routes/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Item from "../pages/Item/Item";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<Item />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;

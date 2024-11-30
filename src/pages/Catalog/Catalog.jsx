// src/pages/Catalog/Catalog.jsx

import React from "react";
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar";
import s from "./Catalog.module.css";
import CatalogList from "../../components/CatalogList/CatalogList";

const Catalog = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <CatalogSideBar />
        <CatalogList />
      </div>
    </div>
  );
};

export default Catalog;

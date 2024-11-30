// src/pages/Item/Item.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./Item.module.css";

import ItemReview from "../../components/ItemReview/ItemReview";
import ItemInsideHeader from "../../components/ItemInsideHeader/ItemInsideHeader";
import Reviews from "../../components/Reviews/Reviews";
import Forms from "../../components/Foarms/Foarms";
import Features from "../../components/Features/Features";
import { selectItemById } from "../../redux/catalog/catalogSelectors";
import { fetchCatalog } from "../../redux/catalog/catalogSlice";

const Item = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => selectItemById(state, id));

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState("Features");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <ItemReview />
      <ItemInsideHeader activeTab={activeTab} onTabClick={handleTabClick} />
      <div className={s.contentWrapper}>
        {activeTab === "Features" && <Features />}
        {activeTab === "Reviews" && <Reviews />}
        <Forms item={item} />
      </div>
    </div>
  );
};

export default Item;

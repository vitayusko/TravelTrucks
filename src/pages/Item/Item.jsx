import React from "react";
import s from "./Item.module.css";

import ItemReview from "../../components/ItemReview/ItemReview";
import { useParams } from "react-router-dom";
import ItemInsideHeader from "../../components/ItemInsideHeader/ItemInsideHeader";
import Reviews from "../../components/Reviews/Reviews";
import Forms from "../../components/Foarms/Foarms";
import Features from "../../components/Features/Features";

const Item = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <ItemReview />
      <ItemInsideHeader />
      <div className={s.contentWrapper}>
        <Reviews />
        {/* <Features /> */}
        <Forms />
      </div>
    </div>
  );
};

export default Item;

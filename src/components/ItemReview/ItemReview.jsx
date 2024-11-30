import React, { useEffect } from "react";
import s from "./ItemReview.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/catalog/catalogSlice";
import {
  selectItemById,
  selectCatalogStatus,
  selectCatalogError,
} from "../../redux/catalog/catalogSelectors";

const ItemReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectCatalogStatus);
  const error = useSelector(selectCatalogError);

  const items = useSelector((state) => state.catalog.items);

  const item = items.find((item) => Number(item.id) === Number(id));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCatalog());
    }
  }, [dispatch, status]);

  console.log("Item ID:", id);
  console.log("Items in state:", items);
  console.log(id, item);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!item) return <p>Item not found</p>;

  return (
    <div className={s.wrapper}>
      <div className={s.mainInfoWrapper}>
        <h2>{item.name}</h2>
        <div className={s.priceWrapper}></div>

        <div className={s.reviewWrapper}>
          <div>
            <svg className={s.iconStar}>
              <use xlinkHref="/icons.svg#icon-star-y" />
            </svg>
            <p>
              {item.rating} ({item.reviews.length} Reviews)
            </p>
          </div>
          <div>
            <svg>
              <use xlinkHref="/icons.svg#icon-localisation" />
            </svg>
            <p>{item.location}</p>
          </div>
        </div>
        <h2>€{item.price}</h2>
      </div>

      <div className={s.imgWrapper}>
        <ul className={s.imgList}>
          {item.gallery.map((image, index) => (
            <li key={index} className={s.imgListItem}>
              <img
                className={s.img}
                src={image.thumb || "/placeholder.jpg"}
                alt={image.alt || "Image"}
              />
            </li>
          ))}
        </ul>
      </div>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemReview;

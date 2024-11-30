import React, { useEffect } from "react";
import s from "./Reviews.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCatalogError,
  selectCatalogStatus,
} from "../../redux/catalog/catalogSelectors";
import { fetchCatalog } from "../../redux/catalog/catalogSlice";

const RatingStars = ({ rating }) => {
  const totalStars = 5; // Общее количество звезд
  const filledStars = Math.floor(rating); // Полностью заполненные звезды
  const emptyStars = totalStars - filledStars; // Пустые звезды

  return (
    <div className={s.rating}>
      {Array.from({ length: filledStars }, (_, index) => (
        <svg key={`filled-${index}`} className={s.iconStar}>
          <use xlinkHref="/icons.svg#icon-star-y" />
        </svg>
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <svg key={`empty-${index}`} className={s.iconStar}>
          <use xlinkHref="/icons.svg#icon-star" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
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

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!item) return <p>Item not found</p>;

  // Проверка наличия отзывов
  const reviews = item.reviews || [];

  return (
    <div className={s.reviewWrapper}>
      <ul className={s.reviewList}>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <li key={index} className={s.reviewItem}>
              <div className={s.reviewItemInfo}>
                <div className={s.nameLetter}>
                  <h2>{review.reviewer_name[0]}</h2>
                </div>
                <div className={s.userReview}>
                  <p>{review.reviewer_name}</p>
                  <div className={s.rating}>
                    {/* <svg className={s.iconStar}>
                      <use xlinkHref="/src/assets/icons/icons.svg#icon-star-y" />
                    </svg> */}{" "}
                    <RatingStars rating={review.reviewer_rating} />
                  </div>
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;

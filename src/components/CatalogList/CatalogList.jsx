// import React, { useEffect, useState } from "react";
// import s from "./CatalogList.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectCatalogError,
//   selectCatalogItems,
//   selectCatalogStatus,
// } from "../../redux/catalog/catalogSelectors";
// import { fetchCatalog } from "../../redux/catalog/catalogSlice";
// import { selectFiltersMemoized } from "../../redux/filters/filtersSelectors";

// const CatalogList = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(selectCatalogItems);
//   const status = useSelector(selectCatalogStatus);
//   const error = useSelector(selectCatalogError);
//   const filters = useSelector(selectFiltersMemoized);
//   const showMore = (itemId) => {
//     window.location.href = `/catalog/${itemId}`;
//   };

//   const [visibleCount, setVisibleCount] = useState(4);
//   const [appliedFilters, setAppliedFilters] = useState({
//     location: "",
//     bodyType: "",
//     hasAC: false,
//     automatic: false,
//     kitchen: false,
//     tv: false,
//     bathroom: false,
//   });

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchCatalog());
//     }
//   }, [dispatch, status]);

//   const getEquipment = (item) => {
//     const equipment = [];
//     if (item.transmission)
//       equipment.push({ name: "Transmission", icon: "icon-automatic" });
//     if (item.engine) equipment.push({ name: "Engine", icon: "icon-petrol" });
//     if (item.AC) equipment.push({ name: "AC", icon: "icon-ac" });
//     if (item.bathroom)
//       equipment.push({ name: "Bathroom", icon: "icon-shower" });
//     if (item.kitchen) equipment.push({ name: "Kitchen", icon: "icon-kitchen" });
//     if (item.TV) equipment.push({ name: "TV", icon: "icon-tv" });
//     if (item.radio) equipment.push({ name: "Radio", icon: "icon-radios" });
//     if (item.refrigerator)
//       equipment.push({ name: "Refrigerator", icon: "icon-refrigerator" });
//     if (item.microwave)
//       equipment.push({ name: "Microwave", icon: "icon-microwave" });
//     if (item.gas) equipment.push({ name: "Gas", icon: "icon-gas" });
//     if (item.water) equipment.push({ name: "Water", icon: "icon-water" });
//     return equipment;
//   };
//   const filteredItems = items.filter((item) => {
//     return (
//       (appliedFilters.location
//         ? item.location
//             .toLowerCase()
//             .includes(appliedFilters.location.toLowerCase())
//         : true) &&
//       (appliedFilters.bodyType
//         ? item.bodyType === appliedFilters.bodyType
//         : true) &&
//       (appliedFilters.hasAC ? item.hasAC === true : true) &&
//       (appliedFilters.automatic ? item.automatic === true : true) &&
//       (appliedFilters.kitchen ? item.kitchen === true : true) &&
//       (appliedFilters.tv ? item.tv === true : true) &&
//       (appliedFilters.bathroom ? item.bathroom === true : true)
//     );
//   });

//   console.log("Filtered items:", filteredItems);

//   const loadMore = () => {
//     setVisibleCount(visibleCount + 4); // Добавляем еще 4 элемента
//   };

//   if (status === "loading") return <p>Loading...</p>;
//   if (status === "failed") return <p>Error: {error}</p>;

//   return (
//     <div className={s.catalogWrapper}>
//       <ul className={s.CatalogList}>
//         {(filteredItems.length > 0 ? filteredItems : items)
//           .slice(0, visibleCount)
//           .map((item) => (
//             <li key={item.id} className={s.CatalogListItem}>
//               <img
//                 src={item.gallery[0]?.thumb || "/placeholder.jpg"}
//                 alt="{item.name}"
//               />
//               <div>
//                 <div className={s.mainInfoWrapper}>
//                   <h2>{item.name}</h2>
//                   <div className={s.priceWrapper}>
//                     <h2>€{item.price}</h2>
//                     <svg>
//                       <use xlinkHref="/src/assets/icons/icons.svg#icon-like" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className={s.reviewWrapper}>
//                   <div>
//                     <svg className={s.iconStar}>
//                       <use xlinkHref="/src/assets/icons/icons.svg#icon-star-y" />
//                     </svg>
//                     <p>
//                       {item.rating} ({item.reviews.length} Reviews)
//                     </p>
//                   </div>
//                   <div>
//                     <svg>
//                       <use xlinkHref="/src/assets/icons/icons.svg#icon-localisation" />
//                     </svg>
//                     <p>{item.location}</p>
//                   </div>
//                 </div>
//                 {/* <p className={s.paragraph}>{item.description}</p> */}
//                 <p className={s.paragraph}>
//                   {item.description.length > 120
//                     ? `${item.description.substring(0, 120)}...`
//                     : item.description}
//                 </p>
//                 <ul className={s.vehicleEquipmentList}>
//                   {getEquipment(item).slice(0, 6).length > 0 ? (
//                     getEquipment(item)
//                       .slice(0, 6)
//                       .map((equipmentItem, index) => (
//                         <li key={index} className={s.vehicleEquipmentItem}>
//                           <svg>
//                             <use
//                               xlinkHref={`/src/assets/icons/icons.svg#${equipmentItem.icon}`}
//                             />
//                           </svg>
//                           {equipmentItem.name}
//                         </li>
//                       ))
//                   ) : (
//                     <p>No equipment available</p>
//                   )}
//                 </ul>
//                 <button className="button" onClick={() => showMore(item.id)}>
//                   Show more
//                 </button>{" "}
//               </div>
//             </li>
//           ))}
//       </ul>
//       {visibleCount < items.length && (
//         <button className={s.loadBTN} onClick={loadMore}>
//           Load more
//         </button>
//       )}
//     </div>
//   );
// };

// export default CatalogList;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./CatalogList.module.css";
import {
  selectCatalogError,
  selectCatalogItems,
  selectCatalogStatus,
} from "../../redux/catalog/catalogSelectors";
import { fetchCatalog } from "../../redux/catalog/catalogSlice";
import { selectFiltersMemoized } from "../../redux/filters/filtersSelectors";

const CatalogList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCatalogItems);
  const status = useSelector(selectCatalogStatus);
  const error = useSelector(selectCatalogError);
  const filters = useSelector(selectFiltersMemoized);

  const [visibleCount, setVisibleCount] = useState(4);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [appliedFilters, setAppliedFilters] = useState({
    location: "",
    bodyType: "",
    hasAC: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCatalog());
    }
  }, [dispatch, status]);

  const handleFavoriteClick = (itemId) => {
    const newFavorites = favorites.includes(itemId)
      ? favorites.filter((id) => id !== itemId)
      : [...favorites, itemId];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const showMore = (itemId) => {
    window.location.href = `/catalog/${itemId}`;
  };

  const getEquipment = (item) => {
    const equipment = [];
    if (item.transmission)
      equipment.push({ name: "Transmission", icon: "icon-automatic" });
    if (item.engine) equipment.push({ name: "Engine", icon: "icon-petrol" });
    if (item.AC) equipment.push({ name: "AC", icon: "icon-ac" });
    if (item.bathroom)
      equipment.push({ name: "Bathroom", icon: "icon-shower" });
    if (item.kitchen) equipment.push({ name: "Kitchen", icon: "icon-kitchen" });
    if (item.TV) equipment.push({ name: "TV", icon: "icon-tv" });
    if (item.radio) equipment.push({ name: "Radio", icon: "icon-radios" });
    if (item.refrigerator)
      equipment.push({ name: "Refrigerator", icon: "icon-refrigerator" });
    if (item.microwave)
      equipment.push({ name: "Microwave", icon: "icon-microwave" });
    if (item.gas) equipment.push({ name: "Gas", icon: "icon-gas" });
    if (item.water) equipment.push({ name: "Water", icon: "icon-water" });
    return equipment;
  };

  const filteredItems = items.filter((item) => {
    return (
      (appliedFilters.location
        ? item.location
            .toLowerCase()
            .includes(appliedFilters.location.toLowerCase())
        : true) &&
      (appliedFilters.bodyType
        ? item.bodyType === appliedFilters.bodyType
        : true) &&
      (appliedFilters.hasAC ? item.hasAC === true : true) &&
      (appliedFilters.automatic ? item.automatic === true : true) &&
      (appliedFilters.kitchen ? item.kitchen === true : true) &&
      (appliedFilters.tv ? item.tv === true : true) &&
      (appliedFilters.bathroom ? item.bathroom === true : true)
    );
  });

  console.log("Filtered items:", filteredItems);

  const loadMore = () => {
    setVisibleCount(visibleCount + 4);
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className={s.catalogWrapper}>
      <ul className={s.CatalogList}>
        {(filteredItems.length > 0 ? filteredItems : items)
          .slice(0, visibleCount)
          .map((item) => (
            <li key={item.id} className={s.CatalogListItem}>
              <img
                src={item.gallery[0]?.thumb || "/placeholder.jpg"}
                alt={item.name}
              />
              <div>
                <div className={s.mainInfoWrapper}>
                  <h2>{item.name}</h2>
                  <div className={s.priceWrapper}>
                    <h2>€{item.price}</h2>
                    <svg
                      onClick={() => handleFavoriteClick(item.id)}
                      className={favorites.includes(item.id) ? s.liked : s.like}
                    >
                      <use xlinkHref="/src/assets/icons/icons.svg#icon-like" />
                    </svg>
                  </div>
                </div>
                <div className={s.reviewWrapper}>
                  <div>
                    <svg className={s.iconStar}>
                      <use xlinkHref="/src/assets/icons/icons.svg#icon-star-y" />
                    </svg>
                    <p>
                      {item.rating} ({item.reviews.length} Reviews)
                    </p>
                  </div>
                  <div>
                    <svg>
                      <use xlinkHref="/src/assets/icons/icons.svg#icon-localisation" />
                    </svg>
                    <p>{item.location}</p>
                  </div>
                </div>
                <p className={s.paragraph}>
                  {item.description.length > 120
                    ? `${item.description.substring(0, 120)}...`
                    : item.description}
                </p>
                <ul className={s.vehicleEquipmentList}>
                  {getEquipment(item).slice(0, 6).length > 0 ? (
                    getEquipment(item)
                      .slice(0, 6)
                      .map((equipmentItem, index) => (
                        <li key={index} className={s.vehicleEquipmentItem}>
                          <svg>
                            <use
                              xlinkHref={`/src/assets/icons/icons.svg#${equipmentItem.icon}`}
                            />
                          </svg>
                          {equipmentItem.name}
                        </li>
                      ))
                  ) : (
                    <p>No equipment available</p>
                  )}
                </ul>
                <button className="button" onClick={() => showMore(item.id)}>
                  Show more
                </button>
              </div>
            </li>
          ))}
      </ul>
      {visibleCount < items.length && (
        <button className={s.loadBTN} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogList;

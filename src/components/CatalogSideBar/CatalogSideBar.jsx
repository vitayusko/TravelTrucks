import React, { useState } from "react";
import s from "./CatalogSideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setBodyType,
  setLocation,
  toggleAC,
  toggleAutomatic,
  toggleBathroom,
  toggleKitchen,
  toggleTV,
} from "../../redux/filters/filtersSlice";
import { selectFiltersMemoized } from "../../redux/filters/filtersSelectors";

const CatalogSideBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFiltersMemoized);

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleBodyTypeChange = (e) => {
    dispatch(setBodyType(e.target.value));
  };

  const handleACToggle = () => {
    dispatch(toggleAC());
  };

  const handleAutomaticToggle = () => {
    dispatch(toggleAutomatic());
  };

  const handleKitchenToggle = () => {
    console.log("Before dispatch, filters.kitchen:", filters.kitchen);
    dispatch(toggleKitchen());
    console.log("After dispatch called");
  };

  const handleTVToggle = () => {
    dispatch(toggleTV());
  };

  const handleBathroomToggle = () => {
    dispatch(toggleBathroom());
  };

  // const handleSearch = () => {
  //   // Диспатчим экшены для установки значений фильтров
  //   dispatch(setLocation(filters.location));
  //   dispatch(setBodyType(filters.bodyType));

  //   // Для булевых фильтров вызываем только set экшены
  //   if (filters.hasAC) {
  //     dispatch(toggleAC()); // включаем AC
  //   } else {
  //     dispatch(toggleAC()); // выключаем AC
  //   }

  //   if (filters.automatic) {
  //     dispatch(toggleAutomatic());
  //   } else {
  //     dispatch(toggleAutomatic());
  //   }

  //   if (filters.kitchen) {
  //     dispatch(toggleKitchen());
  //   } else {
  //     dispatch(toggleKitchen());
  //   }

  //   if (filters.tv) {
  //     dispatch(toggleTV());
  //   } else {
  //     dispatch(toggleTV());
  //   }

  //   if (filters.bathroom) {
  //     dispatch(toggleBathroom());
  //   } else {
  //     dispatch(toggleBathroom());
  //   }

  //   console.log("Filters applied:", filters);
  // };

  const [appliedFilters, setAppliedFilters] = useState(filters);

  const handleSearch = () => {
    setAppliedFilters(filters);
    dispatch(setLocation(filters.location));
    dispatch(setBodyType(filters.bodyType));

    if (filters.hasAC) dispatch(toggleAC());
    if (filters.automatic) dispatch(toggleAutomatic());
    if (filters.kitchen) dispatch(toggleKitchen());
    if (filters.tv) dispatch(toggleTV());
    if (filters.bathroom) dispatch(toggleBathroom());
  };

  console.log(filters);

  if (!filters) {
    return <div>Loading...</div>;
  }
  return (
    <div className={s.catalogSideBar}>
      <div className={s.searchSection}>
        <label htmlFor="location">
          <p>Location</p>
        </label>
        <div className={s.inputWrapper}>
          <svg className={s.inputIcon}>
            <use xlinkHref="/icons.svg#icon-localisation" />
          </svg>
          <input
            type="text"
            id="location"
            value={filters.location}
            onChange={handleLocationChange}
            placeholder="City"
            className={filters.location ? s.activeTextAndIcon : ""}
          />
        </div>
      </div>

      <div className={s.filterWrapper}>
        <p className={s.pFilters}>Filters</p>
        <div className={s.filterSection}>
          <h3>Vehicle Equipment</h3>
          <ul>
            <li
              onClick={handleACToggle}
              className={filters.hasAC ? s.activeFilter : ""}
            >
              <svg>
                <use xlinkHref="/icons.svg#icon-ac" />
              </svg>
              AC
            </li>
            <li
              onClick={handleAutomaticToggle}
              className={filters.automatic ? s.activeFilter : ""}
            >
              <svg>
                <use xlinkHref="/icons.svg#icon-automatic" />
              </svg>
              Automatic
            </li>

            <li
              onClick={handleKitchenToggle}
              className={filters.kitchen ? s.activeFilter : ""}
            >
              {console.log(
                "Active class applied:",
                filters.kitchen ? "activeFilter" : ""
              )}
              <svg>
                <use xlinkHref="/icons.svg#icon-kitchen" />
              </svg>
              Kitchen
            </li>

            <li
              onClick={handleTVToggle}
              className={filters.tv ? s.activeFilter : ""}
            >
              <svg>
                <use xlinkHref="/symbol.svg#icon-tv" />
              </svg>
              TV
            </li>
            <li
              onClick={handleBathroomToggle}
              className={filters.bathroom ? s.activeFilter : ""}
            >
              <svg>
                <use xlinkHref="/icons.svg#icon-shower" />
              </svg>
              Bathroom
            </li>
          </ul>
        </div>
        <div className={s.filterSection}>
          <h3>Vehicle Type</h3>
          <ul>
            <li
              onClick={() => dispatch(setBodyType("van"))}
              className={filters.bodyType === "van" ? s.activeFilter : ""}
            >
              <svg>
                <use xlinkHref="/symbol.svg#icon-van" />
              </svg>
              Van
            </li>
            <li
              onClick={() => dispatch(setBodyType("integrated"))}
              className={
                filters.bodyType === "integrated" ? s.activeFilter : ""
              }
            >
              <svg>
                <use xlinkHref="/symbol.svg#icon-integrated" />
              </svg>
              Fully Integrated
            </li>
            <li
              onClick={() => dispatch(setBodyType("alcove"))}
              className={filters.bodyType === "alcove" ? s.activeFilter : ""}
            >
              <svg>
                <use xlinkHref="/symbol.svg#icon-alcove" />
              </svg>
              Alcove
            </li>
          </ul>
        </div>
      </div>
      <button className={s.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default CatalogSideBar;

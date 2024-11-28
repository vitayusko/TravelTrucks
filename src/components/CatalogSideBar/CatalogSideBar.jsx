// src/components/CatalogSideBar/CatalogSideBar.jsx

import React from "react";
import s from "./CatalogSideBar.module.css";

const CatalogSideBar = () => {
  return (
    <div className={s.catalogSideBar}>
      {/* Раздел поиска по локации */}
      <div className={s.searchSection}>
        <label htmlFor="location">
          <p>Location</p>
        </label>
        <input type="text" id="location" placeholder="City" />
      </div>
      {/* Раздел фильтров - Equipment */}
      <div className={s.filterWrapper}>
        <p className={s.pFilters}>Filters</p>
        <div className={s.filterSection}>
          <h3>Vehicle Equipment</h3>
          <ul>
            <li>
              <svg>
                <use xlinkHref="/src/assets/icons/icons.svg#icon-ac" />
              </svg>
              AC
            </li>
            <li>
              <svg>
                <use xlinkHref="/src/assets/icons/icons.svg#icon-automatic" />
              </svg>
              Automatic
            </li>
            <li>
              <svg>
                <use xlinkHref="/src/assets/icons/icons.svg#icon-kitchen" />
              </svg>
              Kitchen
            </li>
            <li>
              <svg>
                <use xlinkHref="/src/assets/icons/icons.svg#icon-ac" />
              </svg>
              TV
            </li>
            <li>
              {" "}
              <svg>
                <use xlinkHref="/src/assets/icons/icons.svg#icon-shower" />
              </svg>
              Bathroom
            </li>
          </ul>
        </div>
        {/* Раздел фильтров - Vehicle Type */}
        <div className={s.filterSection}>
          <h3>Vehicle Type</h3>
          <ul>
            <li>Van</li>
            <li>Fully Integrated</li>
            <li>Alcove</li>
          </ul>
        </div>
        {/* Кнопка поиска */}
      </div>
      <button className={s.searchButton}>Search</button>{" "}
    </div>
  );
};

export default CatalogSideBar;

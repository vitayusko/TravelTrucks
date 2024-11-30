import React, { useEffect } from "react";
import s from "./Features.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCatalogError,
  selectCatalogStatus,
} from "../../redux/catalog/catalogSelectors";
import { fetchCatalog } from "../../redux/catalog/catalogSlice";

const Features = () => {
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

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!item) return <p>Item not found</p>;

  return (
    <div className={s.FeaturesWrapper}>
      <ul className={s.vehicleEquipmentList}>
        {getEquipment(item).slice(0, 15).length > 0 ? (
          getEquipment(item)
            .slice(0, 6)
            .map((equipmentItem, index) => (
              <li key={index} className={s.vehicleEquipmentItem}>
                <svg>
                  <use xlinkHref={`/icons.svg#${equipmentItem.icon}`} />
                </svg>
                {equipmentItem.name}
              </li>
            ))
        ) : (
          <p>No equipment available</p>
        )}
      </ul>
      <div className={s.detailsWrapper}>
        <h3>Vehicle details</h3>
        <ul>
          <li>
            {" "}
            <p>Form:</p> {item.form}
          </li>
          <li>
            {" "}
            <p>Length:</p> {item.length}
          </li>
          <li>
            {" "}
            <p>Width:</p> {item.width}
          </li>
          <li>
            {" "}
            <p>Height:</p> {item.height}
          </li>
          <li>
            {" "}
            <p>Tank:</p> {item.tank}
          </li>
          <li>
            {" "}
            <p>Consumption:</p> {item.consumption}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;

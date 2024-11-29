import React, { useState } from "react";
import s from "./Foarms.module.css";

const Forms = ({ item }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, itemId: item?.id, itemName: item?.name });
    setIsBookingSuccess(true);
    setTimeout(() => setIsBookingSuccess(false), 2000);
    setFormData({
      name: "",
      email: "",
      bookingDate: "",
      comment: "",
    });
  };

  return (
    <div className={s.formWrapper}>
      <div className={s.mainInfoWrapper}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          {/* Скрытые поля для данных транспорта отправляем вместе с формой */}
          <input type="hidden" name="itemId" value={item?.id || ""} />
          <input type="hidden" name="itemName" value={item?.name || ""} />

          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            required
          />
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            rows="6"
          />
        </div>
        <button className="button" type="submit">
          Send
        </button>
      </form>
      {isBookingSuccess && (
        <div className={s.notification}>
          Your reservation has been successfully completed!
        </div>
      )}
    </div>
  );
};

export default Forms;

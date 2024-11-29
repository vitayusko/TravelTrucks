import React, { useState } from "react";
import s from "./Foarms.module.css";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={s.formWrapper} onSubmit={handleSubmit}>
      <div className={s.mainInfoWrapper}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <div className={s.inputWrapper}>
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
          placeholder="Booking Date*"
          value={formData.bookingDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          rows="6" // Высота textarea (118px)
        />
      </div>
      <button className="button" type="submit">
        Send
      </button>
    </div>
  );
};

export default Forms;

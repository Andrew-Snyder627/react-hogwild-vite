// Form to add hogs
import React, { useState } from "react";
import styles from "./styles/HogForm.module.css";

function HogForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHog = {
      ...formData,
      weight: parseFloat(formData.weight), // Clean & consistent number for weight
    };

    onAdd(newHog);

    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": "",
      image: "",
    });
  };

  return (
    <form className={`ui form ${styles.formContainer}`} onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="greased">Greased?</label>
        <input
          id="greased"
          name="greased"
          type="checkbox"
          checked={formData.greased}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="highest medal achieved">Highest Medal Achieved:</label>
        <input
          id="highest medal achieved"
          name="highest medal achieved"
          value={formData["highest medal achieved"]}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="ui green button">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;

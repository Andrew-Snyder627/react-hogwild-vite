// Card for each pig, handles clicks?, details, & hide?
import React, { useState } from "react";
import styles from "./styles/HogCard.module.css";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => setShowDetails((prev) => !prev);
  const handleHide = () => onHide(hog.name);

  return (
    <div aria-label="hog card" className={`ui card ${styles.cardWrapper}`}>
      <div
        className={`image ${styles.imageWrapper}`}
        onClick={handleToggleDetails}
      >
        <img src={hog.image} alt={`Photo of ${hog.name}`} />
      </div>

      <div className={`content ${styles.content}`}>
        <h3>{hog.name}</h3>

        {showDetails && (
          <div className={styles.details}>
            <p>
              <strong>Speciality:</strong> {hog.specialty}
            </p>
            <p>
              <strong>Weight:</strong> {hog.weight}
            </p>
            <p>
              <strong>{hog.greased ? "Greased" : "Nongreased"}</strong>
            </p>
            <p>
              <strong>Medal:</strong> {hog["highest medal achieved"]}
            </p>
          </div>
        )}
      </div>

      <div className={`extra content ${styles.buttonContainer}`}>
        <button className="ui red button" onClick={handleHide}>
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;

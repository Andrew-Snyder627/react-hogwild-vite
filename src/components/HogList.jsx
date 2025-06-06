// Container for the pig cards
import React from "react";
import HogCard from "./HogCard";
import styles from "./styles/HogList.module.css";

function HogList({ hogs, onHide }) {
  return (
    <div className={`ui grid container ${styles.hogListContainer}`}>
      {hogs.map((hog) => {
        <div key={hog.name} className="ui eight wide column">
          <HogCard hog={hog} onHide={onHide} />
        </div>;
      })}
    </div>
  );
}

export default HogList;

// Filter logic for pigs
import React from "react";
import styles from "./styles/FilterSortBar.module.css";

function FilterSortBar({
  showGreasedOnly,
  onFilterChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className={`ui segment ${styles.filterContainer}`}>
      <div className={styles.filterSection}>
        <label htmlFor="greased" className={styles.filterLabel}>
          <input
            id="greased"
            type="checkbox"
            checked={showGreasedOnly}
            onChange={onFilterChange}
          />
          Greased Pigs Only?
        </label>
      </div>

      <div className={styles.sortSection}>
        <label htmlFor="sortBy" className={styles.sortLabel}>
          Sort by:
          <select
            id="sortBy"
            value={sortBy}
            onChange={onSortChange}
            className="ui dropdown"
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default FilterSortBar;

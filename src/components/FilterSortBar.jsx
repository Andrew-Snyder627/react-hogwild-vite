// Filter logic for pigs
import React from "react";
import styles from "./FilterSortBar.module.css";

function FilterSortBar({
  showGreasedOnly,
  onFilterChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="{`us segment ${styles.barWrapper}`}">
      <label htmlFor="greased" className="{styles.filterLabel}">
        <input
          id="greased"
          type="checkbox"
          checked={showGreasedOnly}
          onChange={onFilterChange}
        />
        Greased Pigs Only?
      </label>
      <label htmlFor="sortBy" className={styles.sortLabel}>
        Sort by:
        <select id="sortBy" value={sortBy} onChange={onSortChange}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default FilterSortBar;

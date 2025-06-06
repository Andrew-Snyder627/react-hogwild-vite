import React, { useState } from "react";
import Nav from "./Nav";
import HogForm from "./HogForm";
import FilterSortBar from "./FilterSortBar";
import HogList from "./HogList";
import styles from "./styles/App.module.css";

import hogsData from "../porkers_data";

function App() {
  // State
  const [hogs, setHogs] = useState(hogsData);
  const [hidden, setHidden] = useState([]);
  // Filtering & Sorting State
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  // Add a new hog
  const addHog = (newHog) => setHogs([...hogs, newHog]);

  // Hide a hog
  const hideHog = (hogName) => setHidden([...hidden, hogName]);

  // Handle filter change
  const handleGreasedFilter = () => setShowGreasedOnly((g) => !g);

  // Handle sort change
  const handleSort = (e) => setSortBy(e.target.value);

  // Prep hogs for display
  const filteredHogs = hogs
    .filter((hog) => (showGreasedOnly ? hog.greased : true))
    .filter((hog) => !hidden.includes(hog.name));

  // Handle sorting
  let displayHogs = [...filteredHogs];
  if (sortBy === "name") {
    displayHogs.sort((a, b) => a.name.localeCompare(b.name)); //TBD
  } else if (sortBy === "weight") {
    displayHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className={styles.appContainer}>
      <Nav />
      <FilterSortBar
        showGreasedOnly={showGreasedOnly}
        onFilterChange={handleGreasedFilter}
        sortBy={sortBy}
        onSortChange={handleSort}
      />
      <HogForm onAdd={addHog} />
      <HogList hogs={displayHogs} onHide={hideHog} />
      <footer className={styles.footer}>
        2025 HogWild | All rights reserved.
      </footer>
    </div>
  );
}

export default App;

import React from "react";

function CategoriesList({ categories }) {
  return (
    <ul className="flex flex-col">
      {/* Rows */}
      {categories.map(({ category }, idx) => (
        <li key={idx}>{category}</li>
      ))}
    </ul>
  );
}

export default CategoriesList;

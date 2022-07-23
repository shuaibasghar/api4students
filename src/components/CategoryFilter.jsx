import { useEffect, useState } from "react";
import { getAllCategories } from "../services/products";

function CategoryFilter({ onChangeCategory, selectedCategory }) {
  let [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    setAllCategories(getAllCategories());
  }, []);

  return (
    <>
      <h5 className="text-center my-4 fs-5 text-decoration-underline">
        Filter by category
      </h5>

      <ul className="ms-0" style={{ listStyle: "none" }}>
        <li className="bg-dark rounded mb-3 text-center">
          <button
            className={`text-white d-block w-100 p-3 border-0 ${
              selectedCategory === "" ? "bg-danger" : "bg-dark"
            }`}
            onClick={() => onChangeCategory("")}
          >
            All Categories
          </button>
        </li>
        {allCategories.map((category) => (
          <li
            key={category}
            className="bg-dark rounded mb-3 text-center d-block"
          >
            <button
              className={`text-white d-block w-100 mb-3 p-3 border-0 ${
                selectedCategory === category
                  ? "bg-danger"
                  : "bg-dark"
              }`}
              onClick={() => onChangeCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryFilter;

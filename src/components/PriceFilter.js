import React from "react";

function PriceFilter({ getFilteredProducts, handlePriceRange, priceRange, onClickSubmit }) {

  return (
    <div className="text-white d-block w-100 p-3 mx-2 border-0">
      <form onSubmit={(e) => onClickSubmit(e, priceRange)}>
        
        <input
          type="number"
          placeholder="Min Value"
          className="d-block w-100 p-2 mx-2 mb-2"
          name="min"
          value={priceRange.min}
          onChange={handlePriceRange}
        />
        <input
          type="number"
          placeholder="Max value"
          name="max"
          value={priceRange.max}
          onChange={handlePriceRange}
          className="d-block w-100 p-2 mx-2 mb-2"
        />

        <button
          className="btn bg-dark text-white p-3 w-100 mx-2"
          type="submit"
          
        >
          Filter By Price
        </button>
      </form>
    </div>
  );
}

export default PriceFilter;

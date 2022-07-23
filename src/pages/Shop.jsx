import React, { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import ShopProducts from "../components/ShopProducts";
import { getShopProducts } from "../services/products";

export default function Shop() {
  let [products, setProducts] = useState(null);
  let [selectedCategory, setSelectedCategory] = useState("");
  let [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
  });
  let [updatePrice, setUpdatePrice] = useState(false);

  const onChangeCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  // on price change
  const handlePriceRange = (e) => {
    
  setPriceRange({
    ...priceRange,
      [e.target.name]: e.target.value,
    });
  // console.log(priceRange)
  };

  // filter by price
  const onClickSubmit = (e) => {
    e.preventDefault(); //donot load page on submit
    setUpdatePrice(true);
  };

  useEffect(() => {
    const products = getShopProducts(selectedCategory, priceRange);
    setProducts(products);
    setUpdatePrice(false);
  }, [selectedCategory, updatePrice]);

  return (
    <>
      <div className="row w-100">
        <div className="col-md-3 d-md-block d-sm-flex flex-sm-column border-end h-50">
          <div className="my-5">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onChangeCategory={onChangeCategory}
            />
          </div>

          <div>
            <PriceFilter
              handlePriceRange={handlePriceRange}
              priceRange={priceRange}
              onClickSubmit={onClickSubmit}
            />
          </div>
        </div>

        <div className="col-md-9">
          <ShopProducts products={products} />
        </div>
      </div>
    </>
  );
}

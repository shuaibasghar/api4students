import { products, categories } from "../db/data";

export function getProductById(id) {
  const product = products.find((p) => p.id === parseInt(id));
  return product;
}

export function getShopProducts(category, priceRange) {
  console.log(category)
  let res = products;

  if (priceRange) {
    const { min, max } = priceRange;
    if (min) {
      res = res.filter((p) => p.price >= parseInt(min));
    }

    if (max) {
      res = res.filter((p) => p.price <= parseInt(max));
    }
  }

  if (category) {
    res = res.filter((p) => p.category === category);
  }

  console.log(res);
  return res.length ? res : null;
}

export function getAllCategories() {
  return categories;
}

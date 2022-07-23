import React from "react";
import { Link } from "react-router-dom";

export default function ShopProducts({ products }) {

  if(!products)
    return <h3 className="text-center"> No products found !</h3>
  
  return (
    <div>
      <div className="row my-5 p-4">
        {products.map((product) => (
          <div className="col-lg-4 col-sm-6" key={product.id}>
            <div className="card-group">
              <div
                className="card text-center shadow-lg mb-5"
                style={{ width: "18rem" }}
              >
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p
                    className="card-text overflow-auto"
                    style={{ height: "5em" }}
                  >
                    {product.desc}
                  </p>

                  <h5>PKR {product.price}</h5>

                  <Link to={`/checkout/${product.id}`} className="btn btn-dark">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

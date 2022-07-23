export default function OrderSummary({product}) {
  return (
    <div>
    
      <div className="">
        <h1 className="text-black-50 mt-2 text-center text-decoration-underline">
          Product Details
        </h1>
        <div className="text-center">
          <div className="d-flex justify-content-center" key={product.id}>
            <div className="card-group">
              <div className="card shadow-lg my-3" style={{ width: "18rem" }}>
                <img
                  src={"/" + product.image}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p
                    className="card-text"
                    style={{ overflow: "hidden", textOverflow: "clipped" }}
                  >
                    {product.desc}
                  </p>

                  <h5>PKR {product.price}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     

    
  )
}

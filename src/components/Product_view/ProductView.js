import React, { useEffect } from "react";
import "./product-view.css";
function ProductView({ products,title }) {
  return (
    <div className="productView-container">
      <div className="pv-heading">
        <h4>{title}</h4>
        <a href="">view all</a>
      </div>

      <div className="pv-items">
        { products.map((item) => {
          return (
            <div className="col-md-3 pv-contents shadow-sm p-3 mb-5 bg-white rounded ">
              <div className="pv-image">
                <img src={item.image}></img>
              </div>
              <div className="pv-data">
                <p>{item.title}</p>
                <h2 class="text-primary mb-1 font-weight-bold">
                  ${item.price}
                </h2>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>(12)
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ProductView;

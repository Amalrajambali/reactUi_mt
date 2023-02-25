import React from "react";
import "./product-card.css";

function ProductCard({ catProducts, addToCart }) {
  console.log(catProducts, addToCart);
  return (
    <div className="pc-items">
      {catProducts.map((item) => {
        return (
          <div
            class="card"
            className="col-md-3 shadow  p-0 mr-3 bg-white rounded pc-content pr-3"
          >
            <img
              class="card-img-top"
              src={item.image}
              alt="Card image cap"
              className="image-product"
            />
            <div class="card-body">
              <p class="card-text p-4 pb-0">{item.title}</p>
              <div style={{ display: "flex" }}>
                <h4 class="text-primary mb-1 font-weight-bold pl-4 pb-2">
                  {item.price}
                </h4>
                <p class="pl-4">Cape Handastone</p>
              </div>
              {addToCart?
                <div style={{marginLeft: "100px"}}>
                  <button className="addtocart-btn">Add to cart</button>
                </div>:""
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;

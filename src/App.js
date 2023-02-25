import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import flashImg from "./flashsale.png";
import contentImage from "./contentImage.png";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import ProductCard from "./components/Product-card/ProductCard";
import ProductView from "./components/Product_view/ProductView";
import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [catProducts, setCatProducts] = useState([]);

  async function getcategryProducts() {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const data = await response.json();
    setCatProducts(data);
  }

  async function getLimitProducts() {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getLimitProducts();
    getcategryProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductView products={products} title="Best Deals"/>

      <div className="productCard-container">
        <div className="pc-heading">
          <h1>Classified products on the week</h1>
          <button type="button" class="btn" className="explore-btn">
            <h4 style={{ padding: "7px" }}>Explore</h4>
          </button>
        </div>
        <ProductCard catProducts={catProducts} />
      </div>

      <div className="productView-container2">
        <div className="pv-heading">
          <h4>Recommanded</h4>
          <a href="">view all</a>
        </div>
        <ProductCard catProducts={products} />
      </div>

      <div className="flashsale-img">
        <img src={flashImg} alt="flashsale" className="img-flash" />
      </div>

      <div className="productView-container2">
        <div className="pv-heading pb-4">
          <h4>Hot Sale!</h4>
        </div>
        <ProductCard catProducts={catProducts} addToCart />
      </div>

      <div className="flashsale-img">
        <img
          src={contentImage}
          alt="flashsale"
          className="img-flash"
          style={{ height: "650px" }}
        />
      </div>

      <ProductView products={products} title="Recently viewed" />



      <Footer/>
      
    </div>
  );
}

export default App;

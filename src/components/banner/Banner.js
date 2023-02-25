import React from "react";
import "./banner.css";
import image from "./shopui.png";
function Banner() {
  console.log(image);
  return (
    <div className="banner-container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://images04.nicepage.com/feature/612016/ecommerce-websites.jpg" alt="Third slide"  />
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src={image} alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://crazydomains.dreamscape.cloud/production/public/src/@master/containers/WebBuilderEcommerceLandingPage/static/Hero/hero_768.jpg?40034d"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;

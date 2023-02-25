import React from "react";

function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted">
        <section
          class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom "
          style={{ backgroundColor: "#3187ED", color: "white" }}
        >
          <div class="me-5 d-none d-lg-block  ">
            <h3>
              {" "}
              <b>Sign Up for Newsletter</b>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus dolor commodi ipsum fugit exer
            </p>
          </div>

          <div>
            <div class="input-group " style={{padding: "24px"}}>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{width:"300px",height:"60px"}}
              />
              <div class="input-group-append" >
                <span class="input-group-text" id="basic-addon2" style={{backgroundColor:"#4D4D4Dc"}} >
                  <p style={{color:"white"}}>Subscribe</p>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>logoipsum
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

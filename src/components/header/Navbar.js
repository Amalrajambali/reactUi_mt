import React from "react";

function Navbar() {
  return (
    <div className="nav-style">

      <div className="nav-left">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <b>logoipsm</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ paddingLeft: "50px" }}
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ backgroundColor: "#F8F8F8", width: "125px" }}
                >
                  Classfields
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </div>
              </li>

              <form
                class="form-inline my-2 my-lg-0"
                style={{ paddingLeft: "50px" }}
              >
                <input
                  className="form-style"
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    backgroundColor: "#F8F8F8",
                    width: "550px",
                    position: "relative",
                  }}
                />
                {/* <i class="fa fa-search" style={{position:"absolute",paddingLeft:"40%",fontSize:"20px"}}></i> */}
                <button
                  class="btn btn-outline-primary my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>

      <div className="nav-right">
      <i class="fa fa-heart"  style={{paddingLeft: "40px",fontSize:"20px"}}/>
      <i class="fa fa-heart" style={{paddingLeft: "40px",fontSize:"20px"}}/>
      <i class="fa fa-user" style={{paddingLeft: "40px",fontSize:"20px"}}/>

      <button type="button" class="btn" className="classfields"><h4 style={{padding: "7px"}}>ClassFields</h4></button>
      </div>


    </div>
  );
}

export default Navbar;
{
  /* <ul class="navbar-nav d-flex flex-row me-1">
<li class="nav-item me-3 me-lg-0">
  <a class="nav-link text-white" href="#">
    <i class="fas fa-shopping-cart"></i>
  </a>
</li>
<li class="nav-item me-3 me-lg-0">
  <a class="nav-link text-white" href="#">
    <i class="fab fa-twitter"></i>
  </a>
</li> */
}
// </ul>

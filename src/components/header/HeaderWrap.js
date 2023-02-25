import React from "react";

function HeaderWrap() {
  return (
    <div className="header-wrap">
        
      <div className="contents-wrap">
        <h5>
          <i class="fa fa-phone"></i> +22 333 442
        </h5>
        <h5>
          <i class="fa fa-envelope"></i> support@gmail.com
        </h5>
      </div>

      <div className="contents-wrap">
        <h5>
          <i class="fa fa-envelope"></i> Location
        </h5>
        <br></br> <h5>|</h5>
       <h5>
        <div class="dropdown" >
          <button
            class="btn btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{color:"white"}}
          >
            $ Dollar
          </button>
        </div>
        </h5>

        <h5>
        <div class="dropdown" >
          <button
            class="btn btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{color:"white"}}
          >
            $ En
          </button>
        </div>
        </h5>

      </div>
    </div>
  );
}

export default HeaderWrap;

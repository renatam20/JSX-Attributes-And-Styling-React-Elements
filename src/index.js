import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1> My Favorite Foods </h1>
    <div>
      <img
        className="food-img"
        alt="pao de queijo"
        src="https://www.thespruceeats.com/thmb/06dPll_GVgcdK0twg_e8GWX273o=/4494x2528/smart/filters:no_upscale()/pao-de-queijo-brazilian-cheese-bread-3028981-hero-01-350503d3d0304dee952f75f6cca3fe8f.jpg"
      />
      <img
        className="food-img"
        alt="pancakes"
        src="https://storage.googleapis.com/gen-atmedia/3/2018/12/8cfbcbb2919742682345681d469b7417a73e4dfe.jpeg"
      />
      <img
        className="food-img"
        alt="brigadeiro"
        src="https://tornadoughalli.com/wp-content/uploads/2019/07/BRIGADEIROS6-1.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);

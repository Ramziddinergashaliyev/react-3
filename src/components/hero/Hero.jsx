import React from "react";
import "./hero.scss";
import img1 from "../../assets/images/hero-img.webp";

function Hero() {
  return (
    <div
      className="hero"
      style={{ background: `url(${img1}) no-repeat center/cover fixed` }}
    >
      <div className="hero__info container">
        <p className="hero__desc">Save $1.040</p>
        <h1 className="hero__title">
          Meet your new Galaxy <br /> family
        </h1>
        <p className="hero__text">
          Get a second and save up to $1.040 with Galaxy S24 Ultra, Watch6 and
          Buds2 purchase.
        </p>
        <button className="hero__btn">Buy now</button>
      </div>
    </div>
  );
}

export default Hero;

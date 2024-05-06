import React from "react";
import "./mobile.scss";

const Mobile = ({ title, items, bg, bt, btcolor, img, desc, text }) => {
  return (
    <div
      className="mobile"
      style={{ background: `url(${img}) no-repeat center/cover`, color: bg }}
    >
      <div className="mobile__info container">
        <div className="mobile__top">
          <h2 className="mobile__title">{title}</h2>
          <h3 className="mobile__items">{items}</h3>
        </div>
        <div className="mobile__bottom">
          <h3 className="mobile__desc">{desc}</h3>
          <p className="mobile__text">{text}</p>
          <button
            className="mobile__btn"
            style={{ backgroundColor: bt, color: btcolor }}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;

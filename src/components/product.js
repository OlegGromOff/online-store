import React from "react";


const Product = (props) => {
  return (
    <div className="product-list__item">
      <a href="/" className="product-list__item__link">
        <img src={props.img} alt={props.alt} className="product-list__item__img" />
        <span className="product-list__item__price">{props.price} грн</span>
        <span className="products-list-item__brand">{props.brand}</span>
      </a>
    </div>
  )
}

export default Product;

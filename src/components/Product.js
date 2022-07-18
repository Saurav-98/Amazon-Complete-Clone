import React from "react";
import "./Product.css";
function Product({ title, price, rating, img }) {
  return (
    <div className="product">
      <div className="products__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <span>⭐</span>;
            })}
        </div>
      </div>

      <img src={img} alt={title} className="product__image" />
      <button className="home__button">Add to Basket</button>
    </div>
  );
}

export default Product;

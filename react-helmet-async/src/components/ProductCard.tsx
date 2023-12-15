import { Product } from "../models/product";
import "./ProductCard.css";

export const ProductCard = ({ product }: Product) => {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

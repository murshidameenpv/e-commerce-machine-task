import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../contexts/CartProvider";

function Cards({ item }) {
  const { addToCart } = useContext(CartContext);
  // console.log(cart, "ooooo");

  const [isHeartFilled, setHeartFilled] = useState(false);
  const handleHeartClicked = () => {
    setHeartFilled(!isHeartFilled);
  };

  return (
    <div className="card shadow-lg bg-base-100  rounded-lg relative  px-1">
      <div
        className={`rating gap-1 absolute right-1 top-0 p-4 heartStar bg-green ${
          isHeartFilled ? "text-rose-600" : "text-white"
        }`}
        onClick={handleHeartClicked}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link
        to={`/products/${item._id}`}
        className="hover:scale-105 transition-all duration-200 md:h-72"
      >
        <figure className="h-48 w-full overflow-hidden">
          <img
            src={item.image}
            alt="card"
            className="object-cover h-full w-full"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/products/${item.id}`}>
          <h2 className="card-title">{item.title}</h2>
        </Link>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold ">
            <span className="text-brown text-sm">$</span>
            {item.price}
          </h5>
          <button
            className="btn bg-green text-white"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

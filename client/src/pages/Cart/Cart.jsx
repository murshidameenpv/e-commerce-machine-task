import React, { useContext, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartProvider";
function Cart() {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);
  //dummy user
  const user = {
    displayName: "Murshid",
    email: "dummy@gmail.com",
    uid: "47rehfefhe4474r4",
  };

  //Calculate total price (quantity * price of item)
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };
  //Calculate sub total
  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);

  return (
    <div className="section-container">
      <div className="max-w-screen-2xl section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-36 flex flex-col  justify-center items-center gap-8">
          {/* texts */}
          <div className="space-y-7 px-5">
            <h2 className="md:text-5xl font-bold text-4xl md:leading-snug leading-snug">
              Items Add To Your <span className="text-green">Cart</span>
            </h2>
          </div>
        </div>
      </div>
      {cart.length === 0 || !cart ? (
        <div className="flex justify-center items-center">
          <img src="/empty.png" alt="emptycart" className="w-96" />
        </div>
      ) : (
        <>
          {/* table for cart */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-green text-white rounded-xl">
                <tr>
                  <th>#</th>
                  <th>Products</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-extrabold">{item.title}</td>
                    <td className="font-extrabold">
                      <button
                        className="btn btn-xs"
                        onClick={() => decreaseQuantity(item)}
                        disabled={item.quantity <= 1}
                      >
                        <RiSubtractFill />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        className="w-10 mx-2 text-center overflow-hidden appearance-none"
                        readOnly
                      />
                      <button
                        className="btn btn-xs"
                        onClick={() => increaseQuantity(item)}
                      >
                        <IoMdAdd />
                      </button>
                    </td>
                    <td className="font-extrabold">{`$ ${calculatePrice(
                      item
                    ).toFixed(2)}`}</td>
                    <th>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => removeFromCart(item)}
                      >
                        <FaTrash className="text-rose-700" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* customer details. */}
          <div className="my-12 flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-1/2 space-y-4">
              <h3 className="font-bold">Customer Details</h3>
              <p className="font-semibold">Name :{user.displayName}</p>
              <p className="font-semibold">Email :{user.email}</p>
              <p className="font-semibold">User Id : {user.uid}</p>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="font-bold">Shipping Details</h3>
              <p className="font-semibold">Total Items : {cart.length}</p>
              <p className="font-semibold">
                {`Total Price : ${cartSubTotal.toFixed(2)}`}
              </p>
              <Link to="/proceed-checkout" className="bg-green btn text-white">
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

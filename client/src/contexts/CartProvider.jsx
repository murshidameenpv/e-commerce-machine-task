import { createContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.itemId === item.id);

    if (existingItem) {
      // Item already exists in cart, show alert
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Item already exists in cart!",
        showConfirmButton: true,
        confirmButtonColor: "#495e57",
      });
    } else {
      // Item does not exist in cart, add it
      const cartItem = {
        itemId: item.id,
        title: item.title,
        quantity: 1,
        image: item.image,
        price: item.price,
        email: "dummyemail@gmail.com",
      };
      setCart((prevCart) => [...prevCart, cartItem]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item added to Cart!",
        showConfirmButton: true,
        confirmButtonColor: "#495e57",
      });
    }
  };

  const removeFromCart = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.itemId !== item.itemId)
    );
  };

  const updateCartItemQuantity = (item, quantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.itemId === item.itemId) {
          return { ...cartItem, quantity };
        }
        return cartItem;
      })
    );
  };

  const decreaseQuantity = (item) => {
    updateCartItemQuantity(item, item.quantity - 1);
  };

  const increaseQuantity = (item) => {
    updateCartItemQuantity(item, item.quantity + 1);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

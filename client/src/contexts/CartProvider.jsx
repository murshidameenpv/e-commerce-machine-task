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

  const removeFromCart = (itemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from the cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#495e57",
      cancelButtonColor: "#952323",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((prevCart) =>
          prevCart.filter((item) => item.itemId !== itemId)
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item removed from Cart!",
          showConfirmButton: true,
          confirmButtonColor: "#495e57",
        });
      }
    });
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.itemId === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

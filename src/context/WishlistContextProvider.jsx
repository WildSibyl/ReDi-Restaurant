import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const updatedWishlist = [...prev, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((item) => item.idMeal !== itemId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

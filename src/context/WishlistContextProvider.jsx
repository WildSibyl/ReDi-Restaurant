import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [whishlist, setWhishlist] = useState([]);

  useEffect(() => {
    const storedWhishlist = JSON.parse(localStorage.getItem("whishlist")) || [];
    setWhishlist(storedWhishlist);
  }, []);

  const addToWhishlist = (item) => {
    setWhishlist((prev) => {
      const updatedWhishlist = [...prev, item];
      localStorage.setItem("whishlist", JSON.stringify(updatedWhishlist));
      return updatedWhishlist;
    });
  };

  const removeFromWhishlist = (itemId) => {
    setWhishlist((prev) => {
      const updatedWhishlist = prev.filter((item) => item.id !== itemId);
      localStorage.setItem("whishlist", JSON.stringify(updatedWhishlist));
      return updatedWhishlist;
    });
  };

  return (
    <WishlistContext.Provider
      value={{ whishlist, addToWhishlist, removeFromWhishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

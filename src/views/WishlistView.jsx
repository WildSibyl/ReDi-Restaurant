import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import MenuItem from "../components/MenuItem/MenuItem.jsx";

const WishlistView = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((dish) => <MenuItem key={dish.idMeal} dish={dish} />)
      )}
    </div>
  );
};

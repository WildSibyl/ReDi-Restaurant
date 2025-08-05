import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContextProvider.jsx";

import styles from "./WishlistView.module.css";
import MenuItem from "../components/MenuItem/MenuItem.jsx";

const WishlistView = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className={styles.wishlistWrapper}>
      <Link to="/">Back to Menu</Link>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((dish) => <MenuItem key={dish.idMeal} dish={dish} />)
      )}
    </div>
  );
};

export default WishlistView;

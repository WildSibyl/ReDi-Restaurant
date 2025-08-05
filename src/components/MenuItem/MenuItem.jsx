import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./MenuItem.module.css";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContextProvider.jsx";

const MenuItem = ({ dish }) => {
  const { strMeal: name, strMealThumb: image } = dish;
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  const isWishlisted = wishlist.some((item) => item.idMeal === dish.idMeal);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(dish.idMeal);
    } else {
      addToWishlist(dish);
    }
  };

  const navigate = useNavigate();
  return (
    <div className={styles.menuItem}>
      <h3>{name}</h3>{" "}
      <button onClick={toggleWishlist}>
        {isWishlisted ? "✖ Remove from Wishlist" : "❤ Add to Wishlist"}
      </button>
      <img src={image} alt={name} />
      <div className={styles.menuItemBtnContainer}>
        <Button onClick={() => navigate(`/meals/${dish.idMeal}`)}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;

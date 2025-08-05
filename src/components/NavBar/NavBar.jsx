import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = ({ children }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContentWrapper}>{children}</div>
      <Link to="/wishlist">Wishlist</Link>
    </div>
  );
};

export default NavBar;

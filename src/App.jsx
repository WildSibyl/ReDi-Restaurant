import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import MenuItemDetails from "./components/MenuItem/MenuItemDetails.jsx";
import RestaurantView from "./views/RestaurantView.jsx";
import WishListView from "./views/WishlistView.jsx";
import { WishlistContextProvider } from "./context/WishlistContextProvider.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <WishlistContextProvider>
        <Routes>
          <Route index element={<RestaurantView />} />
          <Route path="/meals/:id" element={<MenuItemDetails />} />
          <Route path="/wishlist" element={<WishListView />} />
          {/* Add more routes as needed */}
          <Route path="/*" element={<p>404 Page not found</p>} />
        </Routes>
      </WishlistContextProvider>
    </Router>
  );
}

// Wrap App in an ErrorBoundary to help us with development bugs

export default function WrappedApp() {
  return import.meta.env.MODE === "development" ? (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  ) : (
    <App />
  );
}

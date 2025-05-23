import "./assets/styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./pages/cards.jsx";
import CheckoutPage from "./pages/checkout/Checkout.js";
import HomePage from "./pages/Dashboard/home.jsx";
import SignIn from "./pages/sign/sign-in/SignIn.jsx";
import SignUp from "./pages/sign/sign-up/signup.jsx";
import Cart from "./pages/cart/cart.jsx";
import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/contact.jsx";
import Notification from "./pages/notifications/notification.js";
import Help from "./pages/help/help.js";
import NotFound from "./pages/notFound/NotFound.jsx";
import ProductPage from "./pages/product/product.jsx";
import Category from "./pages/category/catagory.js";
import Loading from "./pages/loading/loading.js";
import Wishlist from "./pages/Wishlist";
import PrivateRoute from "./components/PrivateRoute";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import Profile from "./pages/profile/profile.js";
import DealsPage from "./pages/deals/DealsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/cart" element={<Card />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/help" element={<Help />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/category/:categoryId" element={<Category />} />
        {/* Remove the Favorites and WishlistProductList routes */}
        {/* <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/wishlist-products" element={<PrivateRoute><WishlistProductList /></PrivateRoute>} /> */}
        {/* Consolidate Wishlist to a single route */}
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route path="/loading" element={<Loading />} />
        <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/saved" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/orderConfirmation/:orderId"
          element={<OrderConfirmation />}
        />
      </Routes>
    </Router>
  );
}

export default App;

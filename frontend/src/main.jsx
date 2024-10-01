import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js"
import {PayPalScriptProvider} from "@paypal/react-paypal-js"

// private route
import PrivateRoute from "./componets/privateRouute.jsx";
// auth
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/register.jsx";
import Profile from "./pages/Users/Profile.jsx";
import AdminRoute from "./pages/Adimin/AdminRoute.jsx";
import UserList from "./pages/Adimin/UserList.jsx";
import CategoryList from "./pages/Adimin/CategouryList.jsx";
import ProductList from "./pages/Adimin/ProductList.jsx";
import AllProducts from "./pages/Adimin/AllProducts.jsx";
import AdminProductUpdate from "./pages/Adimin/ProductUpdate.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Products/Favorites.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/shop.jsx";
import Shipping from "./pages/orders/Shipping.jsx";
import PlaceOrder from "./pages/orders/PlaceOrder.jsx";
import Order from "./pages/orders/Order.jsx";
import UserOrder from "./pages/Users/UserOrder.jsx";
import OrderList from "./pages/Adimin/OrderList.jsx";
import AdminDashboard from "./pages/Adimin/Admindashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={1} path="/" element={<Home />} />
      <Route  path="/favorite" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/user-orders" element={<UserOrder />} />
      <Route path="/order/:id" element={<Order />} />


      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />}>
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="allproductslist" element={<AllProducts/>} />
        <Route path="productlist/:pageNumber" element={<ProductList />} />
        <Route path="product/update/:_id" element={<AdminProductUpdate />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PayPalScriptProvider>
    <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);

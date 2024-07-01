import "./App.css";
import Navigation from "./customers/components/navigation/Navigation";
import HomePage from "./customers/pages/HomePage";
import Footer from "./customers/components/footer/Footer";
import Product from "./customers/components/product/Product";
import ProductDetalis from "./customers/product-details/ProductDetails";
import Cart from "./customers/components/cart/Cart";
import CheckOut from "./customers/components/checkout/CheckOut";
import Order from "./customers/components/order/Order";
import OrderDetails from "./customers/components/order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import AuthModal from "./customers/auth/AuthModal";
import PaymentSuccess from "./customers/components/payment/PaymentSuccess";

function App() {
  return (
    <div className="App bg-gray-100 ">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetalis/> */}
        {/* <Cart /> */}
        {/* <CheckOut/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </div>

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/login" element={<HomePage />} />
        <Route index path="/signup" element={<HomePage />} />
        <Route
          index
          path="/:levelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        />
        <Route index path="/product/:productId" element={<ProductDetalis />} />
        <Route index path="/cart" element={<Cart />} />
        <Route index path="/checkout" element={<CheckOut />} />
        <Route index path="/account/order" element={<Order />} />
        <Route
          index
          path="/account/order/:orderId"
          element={<OrderDetails />}
        />

        <Route
          index
          path="/payments/:orderId"
          element={<PaymentSuccess />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

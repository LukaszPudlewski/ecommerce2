import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
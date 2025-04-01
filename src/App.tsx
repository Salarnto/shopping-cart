import './index.css';
import Header from './components/Header';
import Cart from "./components/Cart.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage.tsx';

function App() {

  return (
    <CartProvider>
      <Toaster position="top-right" />
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/products" replace/>}/>
          <Route path='products' element={<ProductsPage/>}/>
          <Route path='products/cart' element={<Cart/>}/>
      </Routes>
    </CartProvider>
  )
}

export default App

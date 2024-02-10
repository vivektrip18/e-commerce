import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import OrderSummary from './customer/components/Checkout/OrderSummary';
import Orderpage from './customer/components/Order/Orderpage';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}>

        </Route>
      </Routes>
     

    </div>
  );
}

export default App;

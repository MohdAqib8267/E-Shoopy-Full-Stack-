import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Success from "./Pages/Success";
import { useSelector } from "react-redux";

const App = () => {

  const user = useSelector(state=>state.user.currentUser);
   
  return(
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route  path="/" element={user ? <Home /> : <Register />} />
        </Routes>
        <Routes>
          <Route path="/products/:category" element={<ProductList/>} />
        </Routes>
        <Routes>
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Routes>
          <Route path="/success" element={<Success/>} />
        </Routes>
        <Routes>
        <Route path = "/register" element={user ? <Navigate to="/" replace /> :  <Register />} />
        </Routes>
        <Routes>
        <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
         
        </Routes>
       
      </BrowserRouter>
      
    
    </div>
  )
};

export default App;
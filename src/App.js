// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
// import Cart from './components/Cart';
import Home from './components/Home';
import Footer from './components/Footer'; 

function App() {
//   // State for managing the cart items
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <Footer /> 
      

    </div>

    // <Router>
    //   <div>
    //     {/* <Navbar cartItems={cartItems} /> */}
    //     <Switch>
    //       <Route exact path="/">
    //       <Route exact path="/" component={Home} />
    //         <Products addToCart={addToCart} />
    //       </Route>
    //       {/* <Route path="/cart">
    //         <Cart cartItems={cartItems} />
    //       </Route> */}
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;

// import React, { useState } from 'react';
import brandLogo from '../img/Union.svg'
import '../App.css';
// import logo from '../logo.svg';

export default function Navbar({ cartItems, toggleCart }) {
  // const [showCart, setShowCart] = useState(false);

  // const handleToggleCart = () => {
  //   setShowCart(!showCart);
  //   toggleCart(); // Call the parent component's toggleCart function
  // };

  return (
    <div>
      <div className="alert alert-dark" role="alert">
        THIS Site is in devlopment pls order by whatsapp
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={brandLogo} alt="Logo" width="100px" height="80px" />
          </a>
          <a className="navbar-brand" href="/">
            UNI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Footer
                </a>
              </li>
            </ul>
          </div>
          <div className="mycart">
            {/* Display the number of cart items */}
            <span className="circle"></span>
            <span className="mycarticon1">
              {/* {cartItems.length} */}
            </span>
            {/* Cart icon */}
            <a href="# " className="mycarticon"
            //  onClick={handleToggleCart}
             >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Cart section */}
      {/* {showCart && ( */}
        {/* <div className="cart-section"> */}
          {/* Cart items will be displayed here */}
        {/* </div> */}
      {/* )} */}
    </div>
  );
}






















// import React, { useState } from 'react';
// import '../App.css';
// import logo from '../logo.svg';
// import { Link } from 'react-router-dom';

// export default function Navbar({ cartItems }) {
//   const [showCart, setShowCart] = useState(false);

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <div>
//       <div className="alert alert-dark" role="alert">
//         For The Best View ON The Desktop View
//       </div>

//       <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             <img src={logo} alt="Logo" width="100px" height="50px" />
//           </a>
//           <a className="navbar-brand" href="/">
//             Logo
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="/">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">
//                   Products
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="mycart">
//             {/* Display the number of cart items */}
//             <span className="circle"></span>
//             <span className="mycarticon1">
//               {/* {cartItems.length} */}
//               </span>
//             {/* Cart icon */}
//             <Link to="/cart" className="mycarticon" onClick={toggleCart}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-cart4"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </nav>
      
//       {/* Cart section */}
//       {showCart && (
//         <div className="cart-section">
//           {/* Cart items will be displayed here */}
//         </div>
//       )}
//     </div>
//   );
// }

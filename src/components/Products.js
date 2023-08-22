import React from 'react';
import img from '../img/123.jpg';

export default function Products({ addToCart }) {
  const products = [
    { id: 1, name: 'Mens unifrom', description: 'Product 1 description', price: 1100, link: 'https://wa.me/p/6332479536805677/917013084959' },
    { id: 2, name: 'Girls unifrom', description: 'Product 2 description', price: 700, link: 'https://wa.me/p/23927726506874692/917013084959' },
    { id: 3, name: 'Chuni', description: 'Product 3 description', price: 100, link: 'https://wa.me/p/6240715316055804/917013084959' },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <img src={img} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ₹{product.price}</p>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






















// import React from 'react';
// import img from '../img/123.jpg';

// export default function Products({ addToCart }) {
//   const products = [
//     { id: 1, name: 'Product 1', description: 'Product 1 description', price: 19.99 },
//     { id: 2, name: 'Product 2', description: 'Product 2 description', price: 24.99 },
//     { id: 3, name: 'Product 3', description: 'Product 3 description', price: 14.99 },
//   ];

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {products.map((product) => (
//           <div className="col-md-4" key={product.id}>
//             <div className="card">
//               <img src={img} className="card-img-top" alt="Product" />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-text">Price: ${product.price}</p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="btn btn-primary"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

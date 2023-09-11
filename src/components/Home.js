import React from 'react';
import slide11 from "../img/slide11.png";
import slide2 from "../img/slide2.png";
import slide3 from "../img/slide3.png";
export default function Home() {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* <!-- Slide 1 --> */}
          <h1>Why We're the Best</h1>
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={slide11} className="d-block w-100 img-fluid" alt="Slide 1"/>
          </div>
          {/* <!-- Slide 2 (replace the 'src' attribute with your image) --> */}
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100 img-fluid" alt="Slide 2"/>
          </div>
          {/* <!-- Slide 3 (replace the 'src' attribute with your image) --> */}
          <div className="carousel-item">
          <img src={slide3} className="d-block w-100 img-fluid" alt="Slide 2"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <style>
        {`
          @media (max-width: 767px) {
            .carousel-inner img {
              max-width: 100%;
              height: auto;
            }
          }
        `}
      </style>
    </div>
  );
}

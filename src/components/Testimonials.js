import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <h1>Few of Our Products</h1>
      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;

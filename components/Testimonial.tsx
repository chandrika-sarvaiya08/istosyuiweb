'use client';
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Testinomial.module.css'

function Testimonial() {
  const [display, setDisplay] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(600);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables auto-play
    autoplaySpeed: 4000, // 3 seconds delay between slides
  };

  return (
    <div className="slider-container">
      <h2>Resizable Collapsible</h2>
      <button className="button" onClick={() => setWidth(width + 100)}>
        Increase
      </button>
      <button className="button" onClick={() => setWidth(width - 100)}>
        Decrease
      </button>
      <button className="button" onClick={() => setDisplay(!display)}>
        Toggle
      </button>
      <div
        style={{
          width: `${width}px`,
          display: display ? "block" : "none",
        }}
      >
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;

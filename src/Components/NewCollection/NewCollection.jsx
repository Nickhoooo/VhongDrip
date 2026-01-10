import "./NewCollection.css";
import Banner1 from "../assets/erasebg-transformed (2).png";
import Banner2 from "../assets/Untitled.png";
import Banner3 from "../assets/Men_Fashion7-Photoroom.png";
import { useState, useEffect } from "react";

function NewCollection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    { id: 1, img: Banner1, name: "Banner 1" },
    { id: 2, img: Banner2, name: "Banner 2" },
    { id: 3, img: Banner3, name: "Banner 3" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return(
    <div className="Collection-main">
      <hr />
      <div className="slider-container">
        <div 
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="Banner">
              <div className="Left-Collection">
                <img src={banner.img} alt={banner.name} />
              </div>
              <div className="Right-collection">
                <p className="Collection-tags">New Collection</p>
                <p className="Only-tags">For only  <span>$100</span></p>
                <p className="Details-tags">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Quaerat vero cumque voluptate iure reiciendis soluta exercitationem, 
                </p>
                <button>More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="arrow left" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="arrow right" onClick={nextSlide}>
          &#10095;
        </div>
      </div>
    </div>
  );
}

export default NewCollection;

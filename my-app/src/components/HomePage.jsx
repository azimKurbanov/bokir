import React from 'react';
import './HomePage.css';
import foodImage from '../assets/woman.png';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">FOODI</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#services">Services</a>
          <a href="#offers">Offers</a>
        </nav>
        <button className="contact-btn">Contact</button>
      </header>

      {/* Main Section */}
      <main className="main-section">
        <div className="text-content">
          <h1>
            Dive into Delights <br /> Of Delectable <span>Food</span>
          </h1>
          <p>
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>
          <div className="buttons">
            <button className="order-btn">Order Now</button>
            <button className="watch-btn">
              Watch Video <span className="play-icon">▶</span>
            </button>
          </div>
        </div>

        <div className="image-content">
          <div className="chat-bubble">Hot spicy Food 🌶️</div>
          {/* Placeholder для главного изображения */}
          <div className="main-image-placeholder">
          <img src={foodImage} alt="Delicious Food" className="food-image" />
          </div>
        </div>
      </main>

      {/* Product Cards */}
      <div className="product-cards">
        <div className="card">
          <div className="card-image-placeholder"></div>
          <h3>Spicy noodles</h3>
          <div className="rating">★★★★★</div>
          <p>$18.00</p>
        </div>
        <div className="card">
          <div className="card-image-placeholder"></div>
          <h3>Vegetarian salad</h3>
          <div className="rating">★★★★★</div>
          <p>$23.00</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
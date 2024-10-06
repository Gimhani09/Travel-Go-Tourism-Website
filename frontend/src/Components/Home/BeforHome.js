import React from "react";
import BeforNav from "../NavBar/BeforNav";
import "./beforhome.css"; 

function BeforHome() {
  return (
    <div className="beforhome">
      <BeforNav />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Travel Go</h1>
          <p className="topic_1">
            Because the greatest part of a road trip isn’t arriving at your destination.
            <br />
            It’s all the wild stuff that happens along the way” - Emma Chase
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <video className="background-video" autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/3827376/3827376-sd_640_360_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h2>Explore the World with Travel Go</h2>
        </div>
      </div>

      {/* Photo Grid with Captions */}
      <div className="photo-grid">
        <div className="photo-item">
          <img src="https://images.pexels.com/photos/18245862/pexels-photo-18245862/free-photo-of-man-sitting-on-palm-tree-over-beach.png?auto=compress&cs=tinysrgb&w=600" alt="Beach" />
          <p>Relaxing beach destinations are perfect for unwinding and soaking in the sun. Pristine beaches like Maldives offer crystal-clear waters and luxurious overwater bungalows, while Bora Bora boasts serene lagoons and white sandy shores. Hawaii’s Maui combines scenic beauty with a laid-back vibe, and Thailand’s Phuket offers tranquil spots and vibrant sunsets. Whether it's lounging on the sand or taking a peaceful swim, these destinations promise the ultimate escape from daily stress.</p>
        </div>
        <div className="photo-item">
          <img src="https://images.pexels.com/photos/23119838/pexels-photo-23119838/free-photo-of-man-with-backpack-and-flag-hiking-down-river.jpeg?auto=compress&cs=tinysrgb&w=600https://img.freepik.com/premium-photo/group-hikers-are-walking-up-mountain-with-mountain-background_1176169-243.jpg?ga=GA1.1.107210994.1728145870&semt=ais_hybrid" alt="Mountain" />
          <p>Adventurous mountain hikes in Sri Lanka offer breathtaking views and diverse landscapes, from lush rainforests to misty peaks. Popular hikes include Adam's Peak, famous for its sunrise views and spiritual significance, Ella Rock for panoramic vistas, and the challenging Knuckles Mountain Range, known for its rugged trails and biodiversity. Each trail promises unique experiences for adventure enthusiasts, blending nature, culture, and wildlife.</p>
        </div>
        <div className="photo-item">
          <img src="https://images.pexels.com/photos/26620075/pexels-photo-26620075/free-photo-of-train-on-nine-arches-bridge-in-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=600https://img.freepik.com/premium-photo/vibrant-street-photography_984027-153455.jpg?ga=GA1.1.107210994.1728145870&semt=ais_hybrid" alt="City" />
          <p>The Nine Arches Bridge, also known as the Demodara Bridge, is an iconic landmark nestled in the lush green hills of Ella, Sri Lanka. This bridge, built during the British colonial era, is renowned for its picturesque setting amidst tea plantations and dense jungle. The Nine Arches Bridge is a stone viaduct with, as the name suggests, nine arches and stretches gracefully across a valley. It’s also part of the scenic train route from Kandy to Ella, where trains periodically pass, creating a stunning contrast between the modern train and the historic architecture.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        
        <div className="testimonial-item">
          <p>"This is an amazing platform!"</p>
          <h4>- Alice</h4>
        </div>
        <div className="testimonial-item">
          <p>"I love using Travel Go!"</p>
          <h4>- Jack</h4>
        </div>
      </div>
    </div>
  );
}

export default BeforHome;

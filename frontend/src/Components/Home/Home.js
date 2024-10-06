import React from "react";
import NavBar from "../NavBar/NavBar";
import "./beforhome.css"; 

function Home() {
  return (
    <div className="beforhome">
      <NavBar />
      
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
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h2>Explore the World with Travel Go</h2>
        </div>
      </div>

      {/* Photo Grid with Captions */}
      <div className="photo-grid">
        <div className="photo-item">
          <img src="https://source.unsplash.com/400x300/?beach" alt="Beach" />
          <p>Relaxing Beach Destinations</p>
        </div>
        <div className="photo-item">
          <img src="https://source.unsplash.com/400x300/?mountain" alt="Mountain" />
          <p>Adventurous Mountain Hikes</p>
        </div>
        <div className="photo-item">
          <img src="https://source.unsplash.com/400x300/?city" alt="City" />
          <p>Explore Bustling Cities</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
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

export default Home;

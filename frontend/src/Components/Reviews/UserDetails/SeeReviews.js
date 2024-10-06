import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import User from "../User/User";
import StarRating from "../StarRating/StarRating";
import "./Users.css";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/users";

function SeeReviews() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [averageRatings, setAverageRatings] = useState({
    accommodations: 0,
    destinations: 0,
    activities: 0,
    accommodationsRating: 0,
    destinationsRating: 0,
    activitiesRating: 0,
  });

  const videoRef = useRef(null);

  // Fetch users from the server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(URL);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Calculate average ratings when users change
  useEffect(() => {
    const calculateAverageRatings = () => {
      if (users.length === 0) return;
      const totalAccommodations = users.reduce(
        (acc, user) => acc + user.accommodationsRating,
        0
      );
      const totalDestinations = users.reduce(
        (acc, user) => acc + user.destinationsRating,
        0
      );
      const totalActivities = users.reduce(
        (acc, user) => acc + user.activitiesRating,
        0
      );

      const averageAccommodations = totalAccommodations / users.length;
      const averageDestinations = totalDestinations / users.length;
      const averageActivities = totalActivities / users.length;

      setAverageRatings({
        accommodations: isNaN(averageAccommodations)
          ? 0
          : averageAccommodations,
        destinations: isNaN(averageDestinations) ? 0 : averageDestinations,
        activities: isNaN(averageActivities) ? 0 : averageActivities,
      });
    };
    calculateAverageRatings();
  }, [users]);

  // Search functionality
  const handleSearch = () => {
    const filtered = users.filter((user) =>
      Object.values(user).some((field) =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredUsers(filtered);
    setNoResults(filtered.length === 0);
  };

  // Video fade-in effect
  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.style.opacity = "0";
    setTimeout(() => {
      videoElement.style.transition = "opacity 2s ease-in-out";
      videoElement.style.opacity = "1";
    }, 500);
  }, []);

  return (
    <div className="users-page">
      <Nav />

      {/* Video animation in the header */}
      <div className="video-section">
        <video ref={videoRef} autoPlay muted loop className="header-video">
          <source src="https://videos.pexels.com/video-files/4133023/4133023-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Title and Search Bar on top of the video */}
        <div className="overlay">
          <h1 className="page-title">What are our Customers Saying?</h1>
          <div className="search-container">
          <input
  onChange={(e) => setSearchQuery(e.target.value)}
  type="text"
  name="search"
  placeholder="Search..."
  className="search-input"
  style={{ 
    border: '2px solid #000000', /* Your desired border color */
    transition: 'border-color 0.3s' 
  }}
/>

            <button 
  onClick={handleSearch} 
  className="search-button" 
  style={{ backgroundColor: '#000000', color: '#ffffff' }}
>
  Search
</button>
            
          </div>
        </div>
      </div>

      <div className="add">
        <button >
          <Link to="/addreviews" >Add Your Reviews & Ratings</Link>
        </button>
      </div>

      <div className="users-container">
        <div className="average-ratings">
          <h2>Average Ratings</h2>
          <div className="rating-box">
            <h4>Accommodations</h4>
            <p>{averageRatings.accommodations.toFixed(2)} / 5</p>
            <StarRating value={averageRatings.accommodations} />
          </div>
          <div className="rating-box">
            <h4>Destinations</h4>
            <p>{averageRatings.destinations.toFixed(2)} / 5</p>
            <StarRating value={averageRatings.destinations} />
          </div>
          <div className="rating-box">
            <h4>Activities</h4>
            <p>{averageRatings.activities.toFixed(2)} / 5</p>
            <StarRating value={averageRatings.activities} />
          </div>
        </div>

        {noResults ? (
          <p>No Users Found</p>
        ) : (
          <div className="user-list">
            {(filteredUsers.length > 0 ? filteredUsers : users).map((user, i) => (
              <div key={i} className="user-card">
                <User user={user} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SeeReviews;

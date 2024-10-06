import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

function User(props) {
  const {
    _id,
    name,
    country,
    accommodations,
    destinations,
    activities,
    accommodationsRating,
    destinationsRating,
    activitiesRating,
  } = props.user;
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="user-card">
      <h1>{name} : {country}</h1>
      <div className="details">
        
        <p>User: {name}</p>
        <p>Country: {country}</p>
        <p>Accommodations: {accommodations}</p>
        <p>Destinations: {destinations}</p>
        <p>Activities: {activities}</p>
        <p>AccommodationsRating: {accommodationsRating}</p>
        <p>DestinationsRating: {destinationsRating}</p>
        <p>ActivitiesRating : {activitiesRating}</p>
        <p>Date: {currentDate}</p>
      </div>
      <button>
        <Link to={`/seereviews/${_id}`} className="update-link" >
          Update
        </Link>
      </button>
    </div>
  );
}

export default User;

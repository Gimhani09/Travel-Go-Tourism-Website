import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AUser.css";

function AUser(props) {
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
    fetchUsers,
    hideDeleteButton, // hide delete button
    showDeleteButton // show delete button only in regular view
  } = props.user;

  // Get current date
  const currentDate = new Date().toISOString().split("T")[0];

  const history = useNavigate();

  // handle user deletion
  const deleteHandler = async () => {
    // Send DELETE request to server
    await axios
      .delete(`http://localhost:5000/users/${_id}`)
      .then(() => fetchUsers())
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <div>
        <h1 style={{ fontFamily: "Poppins, sans-serif" }}>
          {name} : {country}
        </h1>
        <br />

        <p style={{ fontFamily: "Poppins, sans-serif" }}>ID: {_id}</p>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>User: {name}</p>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>Country: {country}</p>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>
          Accommodations: {accommodations}
        </p>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>
          Destinations: {destinations}
        </p>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>
          Activities: {activities}
        </p>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>
          accommodationsRating: {accommodationsRating}
        </p>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>
          destinationsRating:{destinationsRating}{" "}
        </p>
        <p style={{ fontFamily: "Poppins, sans-serif" }}>
          activitiesRating : {activitiesRating}
        </p>

        <br />
        <p style={{ fontFamily: "Poppins, sans-serif" }}>Date: {currentDate}</p>
        <br />
      </div>
      {!hideDeleteButton && showDeleteButton && ( // Render delete button only if not in report and showDeleteButton is true
        <button
          onClick={deleteHandler}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default AUser;

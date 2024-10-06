import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../Register/regi.css";
function UpdateUser() {
  const [input, setInputs] = useState({});
  const navigate = useNavigate(); // Changed from history to navigate
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/api/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/api/users/${id}`, {
        Firstname: String(input.Firstname),
        Lastname: String(input.Lastname),
        age: Number(input.age),
        country: String(input.country),
        Email: String(input.Email),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      await sendRequest();
      // Show success message
      window.alert("Update successful!");
      // Navigate to the profile page
      navigate("/userdetails");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      // Handle error if needed
      // You can show an error message or take other actions
    }
  };

  return (
    <div>
    <h1 className="topic_auth my-2">
        Update <span className="sub_auth">User Details</span>
    </h1>
    <div className="">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form className="form_user_details" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Firstname:</label>
                        <input
                            className="form-control w-100 rounded-4"
                            style={{height:'40px'}}
                            type="text"
                            name="Firstname"
                            onChange={handleChange}
                            value={input.Firstname || ""}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Lastname:</label>
                        <input
                            className="form-control w-100 rounded-4"
                            type="text"
                            name="Lastname"
                            style={{height:'40px'}}
                            onChange={handleChange}
                            value={input.Lastname || ""}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age:</label>
                        <input
                            className="form-control w-100 rounded-4"
                            type="text"
                            name="age"
                            style={{height:'40px'}}
                            onChange={handleChange}
                            value={input.age || ""}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Country:</label>
                        <input
                            className="form-control w-100 rounded-4"
                            type="text"
                            name="country"
                            style={{height:'40px'}}
                            onChange={handleChange}
                            value={input.country || ""}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            className="form-control w-100 rounded-4"
                            type="email"
                            style={{height:'40px'}}
                            name="Email"
                            onChange={handleChange}
                            value={input.Email || ""}
                            required
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

  );
}

export default UpdateUser;

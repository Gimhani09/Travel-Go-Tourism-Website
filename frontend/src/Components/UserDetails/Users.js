import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";
import "../UserDetails/Users.css";
import "./Users.css";

const URL = "http://localhost:5000/api/users";

// Function to fetch users from the API
const fetchUsers = async () => {
  try {
    const response = await axios.get(URL);
    return response.data.users || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

function Users() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  // Function to load users
  const loadUsers = () => {
    fetchUsers().then((data) => {
      setUsers(data);
      setNoResults(data.length === 0);
    });
  };

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Users Report",
    onAfterPrint: () => console.log("Users Report Successfully Downloaded !"),
  });

  const handleSearch = () => {
    fetchUsers().then((data) => {
      const filteredUsers = data.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setUsers(filteredUsers);
      setNoResults(filteredUsers.length === 0);
    });
  };

  const handleSendReport = () => {
    const phonenumber = "+94714153371";
    const message = "Selected User Report";
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phonenumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(WhatsAppUrl, "_blank");
  };

  return (
    <div class="my-2">
    <div class=" ful_detail_box">
        <h1 class="topic_auth">
            User <span class="sub_auth">Details</span>
        </h1>
        <div class="row align-items-center">
            <div class="col-md-4 mb-3 d-flex justify-content-center align-items-center">
                <button
                    onClick={() => (window.location.href = "/Adduser")}
                    class="btn btn-primary btn-lg btn-block"
                >
                    Add User
                </button>
            </div>
            <div class="col-md-6 mb-3">
                <div class="input-group d-flex justify-content-center align-items-center">
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        class="form-control"
                        name="Search"
                        placeholder="Search User Details"
                    />
                    <div class="input-group-append d-flex justify-content-center align-items-center">
                        <button
                            class="btn btn-primary"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <button
                    class="btn btn-primary btn-lg btn-block"
                    onClick={handlePrint}
                >
                    Download Report
                </button>
            </div>
        </div>

        {noResults ? (
            <div class="no-results mt-4">
                <h1>No users available</h1>
            </div>
        ) : (
            <div ref={ComponentsRef}>
                <table class="table table-striped table_details_admin mt-4">
                    <thead>
                        <tr>
                            <th class="admin_tbl_th">ID</th>
                            <th class="admin_tbl_th">First Name</th>
                            <th class="admin_tbl_th">Last Name</th>
                            <th class="admin_tbl_th">Age</th>
                            <th class="admin_tbl_th">Country</th>
                            <th class="admin_tbl_th">Email</th>
                            <th class="admin_tbl_th">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <User key={i} user={user} />
                        ))}
                    </tbody>
                </table>
                <div class="text-center">
                    <button
                        class="btn btn-primary btn-lg btn_dash_admin"
                        onClick={handleSendReport}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        )}
    </div>
</div>


  );
}

export default Users;

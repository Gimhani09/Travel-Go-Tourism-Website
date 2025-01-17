import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap"; // Importing Form and Button components from React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./AUpdateTicket.css";

function AUpdateTicket() {
  const [ticket, setTicket] = useState({});
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const fetchTicket = async () => {
      await axios
        .get(`http://localhost:5000/tickets/${id}`)
        .then((res) => res.data)
        .then((data) => {
          const {
            ticketID,
            dateCreated,
            touristInfo,
            category,
            subject,
            description,
            priority,
            attachments,
            answer,
          } = data.ticket;
          const formattedDate = new Date(dateCreated).toLocaleDateString(); // Format date without time zone
          setTicket({
            ticketID,
            formattedDate,
            touristInfo,
            category,
            subject,
            description,
            priority,
            attachments,
            answer,
          });
          setInputs({
            ...data.ticket,
            dateCreated: formattedDate, // Update dateCreated with formatted date
          });
        });
    };
    fetchTicket();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("touristInfo.")) {
      const nestedField = name.split(".")[1];
      setInputs((prevState) => ({
        ...prevState,
        touristInfo: {
          ...prevState.touristInfo,
          [nestedField]: value,
        },
      }));
    } else {
      setInputs((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/tickets/${id}`, inputs)
      .then((res) => res.data)
      .then(() => history("/ATicketDetails"));
  };

  return (
    <div className="container mt-4">
  <div className="row">
    <div className="col-md-6">
      <h4>ID: {ticket.ticketID}</h4>
      <h4>Date: {ticket.formattedDate}</h4>
      <h4>Email: {ticket.touristInfo?.email}</h4>
      <h4>Category: {ticket.category}</h4>
    </div>
    <div className="col-md-6">
      <h4>Subject: {ticket.subject}</h4>
      <h4>Description: {ticket.description}</h4>
      <h4>Priority: {ticket.priority}</h4>
      <h4>Attachments: {ticket.attachments}</h4>
    </div>
  </div>

  <Form onSubmit={handleSubmit} className="mt-4">
    <Form.Group controlId="answer">
      <Form.Label>Enter the answer here:</Form.Label>
      <Form.Control
        as="textarea" // Change input type to textarea
        rows={5} // Set the number of rows
        style={{ overflowY: "scroll" }} // Apply overflow scroll style
        name="answer"
        onChange={handleChange}
        value={inputs.answer || ""}
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
</div>

  );
}

export default AUpdateTicket;

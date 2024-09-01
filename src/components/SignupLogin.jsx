import React, { useState } from "react";
import axios from "axios";
import "./SignupLogin.css";


const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/contact", contactData);
      console.log(response.data); // Log response from the backend
      // Handle success message or redirect
    } catch (error) {
      console.error("Error:", error);
      // Handle error message
    }
  };

  const handleSubmitSpeechToText = async (note) => {
    try {
      const response = await axios.post("http://localhost:7000/speech-to-text", { note });
      console.log(response.data); // Log response from the backend
      // Handle success message or redirect
    } catch (error) {
      console.error("Error:", error);
      // Handle error message
    }
  };

  const handleSubmitTextToSpeech = async (text) => {
    try {
      const response = await axios.post("http://localhost:7000/text-to-speech", { text });
      console.log(response.data); // Log response from the backend
      // Handle success message or redirect
    } catch (error) {
      console.error("Error:", error);
      // Handle error message
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmitContact}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={contactData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={contactData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile:</label>
          <input type="text" name="mobile" value={contactData.mobile} onChange={handleChange} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={contactData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Example of Speech to Text */}
      <button onClick={() => handleSubmitSpeechToText("Speech Note")} >Convert Speech to Text</button>

      {/* Example of Text to Speech */}
      <button onClick={() => handleSubmitTextToSpeech("Text Note")}>Convert Text to Speech</button>
    </div>
  );
};

export default ContactForm;

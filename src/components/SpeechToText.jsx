import React, { useState, useEffect } from "react";
import "./SpeechToText.css";
import axios from "axios"; // Import axios
import { Link } from "react-router-dom";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function SpeechToText() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = async () => {
    try {
      const response = await axios.post("http://localhost:7000/speech-to-text", { note });
      console.log(response.data); // Log response from the backend

      alert("Note saved successfully!");
      setSavedNotes([...savedNotes, note]);
      setNote("");
      setIsListening(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="app-title">Voice Notes</h1>
        <div className="box">
          <h2>Current Note</h2>
          {isListening ? <span>🛑</span> : <span>🎙️</span>}
          <button onClick={() => setIsListening((prevState) => !prevState)}>
            {isListening ? "Stop" : "Start"} Recording
          </button>
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
        </div>

        <Link
          to="/go-to-app"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "4rem",
            background: "white",
            padding: "5px",
            borderRadius: "5px",
            }}
        >
          Go To App
        </Link>
      </div>
    </>
  );
}

export default SpeechToText;


import React from "react";
import { Link } from "react-router-dom";
import tts from "../assets/texttospeech.png";
import stt from "../assets/speechtotext.png";

function GoToApps() {
  return (
    <div className="go-to-apps-container">
    
      <div className="app-icons">
        <div>
          <h1>Text to Speech</h1>
          <Link to="/app/text-to-speech">
            <img src={tts} alt="text to speech icon" className="app-icon" />
          </Link>
        </div>
        <div>
          <h1>Speech To Text</h1>
          <Link to="/app/speech-to-text">
            <img src={stt} alt="speech to text icon" className="app-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GoToApps;

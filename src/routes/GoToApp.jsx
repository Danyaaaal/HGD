import React from "react";
import { Link } from "react-router-dom";
import tts from "../assets/texttospeech.png";
import stt from "../assets/speechtotext.png";
function GoToApp() {
  return (
    <>
      <div>
        <h1>Text to speech & Speech to text</h1>
      </div>
      <div>
        <Link to="/app/text-to-speech">
          <img src={tts} alt="text to speech icon" />
        </Link>
      </div>
      <div>
        <Link to="/app/speech-to-text">
          <img src={stt} alt="speech to text icon" />
        </Link>
      </div>
    </>
  );
}

export default GoToApp;

import React, { useState, useEffect } from "react";
import "./TextToSpeech.css";
import axios from "axios"; // Import axios
import { Link } from "react-router-dom";

const TextToSpeechApp = () => {
  const [text, setText] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [selectedVoiceName, setSelectedVoiceName] = useState("");

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    setUtterance(u);
    if (selectedVoiceName) {
      setVoice(voices.find((v) => v.name === selectedVoiceName));
    } else {
      setVoice(voices[0]);
    }
    return () => {
      synth.cancel();
    };
  }, [text, selectedVoiceName]);

  const handlePlay = async () => {
    try {
      const response = await axios.post("http://localhost:7000/text-to-speech", { text });
      console.log(response.data); // Log response from the backend

          // Send the text to the backend for processing and saving
    // await axios.post("http://localhost:7000/save-text-and-speech", { text });   //this part is extra. it was created to work with voice

      const synth = window.speechSynthesis;
      if (isPaused) {
        synth.resume();
      } else {
        utterance.voice = voice;
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = volume;
        synth.speak(utterance);
      }
      setIsPaused(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    synth.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPaused(false);
  };

  const handleVoiceChange = (event) => {
    const selectedVoiceName = event.target.value;
    setSelectedVoiceName(selectedVoiceName);
  };

  const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Text to Speech Converter</h1>
      <div className="form-container">
        <div>
          <label htmlFor="voices" className="form-label">
            Select a Voice:
          </label>
          <select
            id="voices"
            className="form-select"
            value={voice?.name}
            onChange={handleVoiceChange}
          >
            {window.speechSynthesis.getVoices().map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.name}
              </option>
            ))}
          </select>
        </div>
        <div className="control-container">
          <label className="form-label">
            Pitch:
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              className="form-slider"
              value={pitch}
              onChange={handlePitchChange}
            />
          </label>
          <label className="form-label">
            Speed:
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              className="form-slider"
              value={rate}
              onChange={handleRateChange}
            />
          </label>
          <label className="form-label">
            Volume:
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              className="form-slider"
              value={volume}
              onChange={handleVolumeChange}
            />
          </label>
        </div>
        <div className="button-container">
          <button onClick={handlePlay} className="play-button">
            {isPaused ? "Resume" : "Play"}
          </button>
          <button className="pause-button" onClick={handlePause}>
            Pause
          </button>
          <button onClick={handleStop} className="stop-button">
            Stop
          </button>
        </div>
      </div>
      <textarea
        id="editor"
        rows="8"
        className="text-input"
        placeholder="Please enter your text to select voices...."
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>

      <Link
        to="/go-to-app"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "16px",
          fontWeight: "bold",
          background: "white",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        Go To App
      </Link>
    </div>
  );
};

export default TextToSpeechApp;





// import React, { useState, useEffect } from "react";
// import "./TextToSpeech.css";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const TextToSpeechApp = () => {
//   const [text, setText] = useState("");
//   const [isPaused, setIsPaused] = useState(false);
//   const [utterance, setUtterance] = useState(null);
//   const [voice, setVoice] = useState(null);
//   const [pitch, setPitch] = useState(1);
//   const [rate, setRate] = useState(1);
//   const [volume, setVolume] = useState(1);
//   const [selectedVoiceName, setSelectedVoiceName] = useState("");

//   useEffect(() => {
//     const synth = window.speechSynthesis;
//     const u = new SpeechSynthesisUtterance(text);
//     const voices = synth.getVoices();
//     setUtterance(u);
//     if (selectedVoiceName) {
//       setVoice(voices.find((v) => v.name === selectedVoiceName));
//     } else {
//       setVoice(voices[0]);
//     }
//     return () => {
//       synth.cancel();
//     };
//   }, [text, selectedVoiceName]);

//   const handlePlay = async () => {
//     try {
//       const synth = window.speechSynthesis;
//       const audioBlob = await getVoiceBlob();
//       const formData = new FormData();
//       formData.append("voice", audioBlob);
//       const response = await axios.post("http://localhost:7000/save-voice", formData);
//       console.log(response.data);
      
//       if (isPaused) {
//         synth.resume();
//       } else {
//         utterance.voice = voice;
//         utterance.pitch = pitch;
//         utterance.rate = rate;
//         utterance.volume = volume;
//         synth.speak(utterance);
//       }
//       setIsPaused(false);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const getVoiceBlob = () => {
//     return new Promise((resolve, reject) => {
//       const synth = window.speechSynthesis;
//       const u = new SpeechSynthesisUtterance(text);
//       u.voice = voice;
//       u.pitch = pitch;
//       u.rate = rate;
//       u.volume = volume;
//       u.onend = () => {
//         const audioBlob = new Blob([new Uint8Array(u.audioBuffer)], {
//           type: "audio/wav",
//         });
//         resolve(audioBlob);
//       };
//       synth.speak(u);
//     });
//   };

//   const handlePause = () => {
//     const synth = window.speechSynthesis;
//     synth.pause();
//     setIsPaused(true);
//   };

//   const handleStop = () => {
//     const synth = window.speechSynthesis;
//     synth.cancel();
//     setIsPaused(false);
//   };

//   const handleVoiceChange = (event) => {
//     const selectedVoiceName = event.target.value;
//     setSelectedVoiceName(selectedVoiceName);
//   };

//   const handlePitchChange = (event) => {
//     setPitch(parseFloat(event.target.value));
//   };

//   const handleRateChange = (event) => {
//     setRate(parseFloat(event.target.value));
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(parseFloat(event.target.value));
//   };

//   return (
//     <div className="app-container">
//       <h1 className="app-title">Text to Speech Converter</h1>
//       <div className="form-container">
//         <div>
//           <label htmlFor="voices" className="form-label">
//             Select a Voice:
//           </label>
//           <select
//             id="voices"
//             className="form-select"
//             value={voice?.name}
//             onChange={handleVoiceChange}
//           >
//             {window.speechSynthesis.getVoices().map((voice) => (
//               <option key={voice.name} value={voice.name}>
//                 {voice.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="control-container">
//           <label className="form-label">
//             Pitch:
//             <input
//               type="range"
//               min="0.5"
//               max="2"
//               step="0.1"
//               className="form-slider"
//               value={pitch}
//               onChange={handlePitchChange}
//             />
//           </label>
//           <label className="form-label">
//             Speed:
//             <input
//               type="range"
//               min="0.5"
//               max="2"
//               step="0.1"
//               className="form-slider"
//               value={rate}
//               onChange={handleRateChange}
//             />
//           </label>
//           <label className="form-label">
//             Volume:
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.1"
//               className="form-slider"
//               value={volume}
//               onChange={handleVolumeChange}
//             />
//           </label>
//         </div>
//         <div className="button-container">
//           <button onClick={handlePlay} className="play-button">
//             {isPaused ? "Resume" : "Play"}
//           </button>
//           <button className="pause-button" onClick={handlePause}>
//             Pause
//           </button>
//           <button onClick={handleStop} className="stop-button">
//             Stop
//           </button>
//         </div>
//       </div>
//       <textarea
//         id="editor"
//         rows="8"
//         className="text-input"
//         placeholder="Please enter your text to select voices...."
//         onChange={(e) => setText(e.target.value)}
//         required
//       ></textarea>

//       <Link
//         to="/go-to-app"
//         style={{
//           textDecoration: "none",
//           color: "black",
//           fontSize: "16px",
//           fontWeight: "bold",
//           background: "white",
//           padding: "5px",
//           borderRadius: "5px",
//         }}
//       >
//         Go To App
//       </Link>
//     </div>
//   );
// };

// export default TextToSpeechApp;

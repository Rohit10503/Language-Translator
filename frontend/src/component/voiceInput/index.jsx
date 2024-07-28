import React, { useEffect, useState } from "react";
import "./voiceInput.css"

const VoiceInput = () => {
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [translatedOutput, setTranslatedOutput] = useState("")
  const [preferedLang,setPreferedLang]=useState("en")

  useEffect(() => {
    // Check if the browser supports the Web Speech API
    if ('webkitSpeechRecognition' in window) {
      // Create a new instance of the speech recognition object
      const recognitionInstance = new window.webkitSpeechRecognition();

      // Set recognition parameters
      recognitionInstance.continuous = false; // Stop recognition after a single result
      recognitionInstance.interimResults = true; // Do not return interim results
      recognitionInstance.lang = 'hi-In'; // Set language to English (US)

      // Event handler for when a result is received
      recognitionInstance.onresult = async (event) => {
        const transcript = event.results[0][0].transcript; // Get the transcript of the first result
        setTranscript(transcript); // Update the state with the transcript


        let result = await fetch("https://language-translator-python-backend.onrender.com/translate", {   //http://localhost:5000/translate
          method: "post", 
          body: JSON.stringify({ transcript: transcript }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        result = await result.json();
        setTranslatedOutput(result)
        console.log(result, preferedLang);


      };

      // Event handler for when recognition ends
      recognitionInstance.onend = async () => {

        console.log('Voice recognition ended.');

      };

      // Event handler for any recognition errors
      recognitionInstance.onerror = function (event) {
        console.error('Voice recognition error:', event.error);
      };

      // Set the recognition instance in state
      setRecognition(recognitionInstance);
    } else {
      alert('Your browser does not support the Web Speech API.');
    }
  }, []);

  // Define the function to start voice recognition
  const startRecognition = () => {
    if (recognition) {
      recognition.start();
    }
  };

  return (
    <>
      <div className="take-user-input">
        <textarea
          type="text"
          id="voiceInput"
          placeholder="Speak something..."
          value={transcript}


        />
        <button className="inp-btn" onClick={() => startRecognition()}>Start Voice Input</button>




      </div>
      <div className="output">
        <select name="language" id="language" onClick={()=>{setPreferedLang(value)}} >
          <optgroup>
          <option value="en" onClick={()=>{setPreferedLang("en")}}>English</option>
          <option value="ma" onClick={()=>{setPreferedLang("ma")}} >Marathi</option>
          <option value="hi" onClick={()=>{setPreferedLang("hi")}}>Hindi</option>
        </optgroup>
        </select>

        <textarea
          type="text"
          id="voiceOutput"
          placeholder="Translate Here..."
          value={translatedOutput.transcript}


        />

      </div>

    </>
  );
};

export default VoiceInput;

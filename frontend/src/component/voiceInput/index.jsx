import React, { useEffect, useState } from "react";
import "./voiceInput.css"

const VoiceInput = () => {
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [translatedOutput, setTranslatedOutput] = useState("")
  const [preferedLang, setPreferedLang] = useState("en")

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



        // Request to backend
        console.log("abbhi hai ", preferedLang)
        let result = await fetch("https://language-translator-python-backend.onrender.com/translate", {   //http://localhost:5000/translate      https://language-translator-python-backend.onrender.com/translate
          method: "post",
          body: JSON.stringify({
            transcript: transcript,
            lang: preferedLang

          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        result = await result.json();
        setTranslatedOutput(result)
        console.log(result);



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
  }, [preferedLang]);



  // Define the function to start voice recognition
  const startRecognition = () => {
    if (recognition) {
      recognition.start();
    }

  };



  // in order to select language
  const handleLanguageChange = (event) => {
    setPreferedLang(event.target.value);
    console.log("call hua", event.target.value, " hai toh ", preferedLang)
  };
  // To spek output
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(translatedOutput.transcript);
    utterance.lang = "hi-IN"
    window.speechSynthesis.speak(utterance);
  }
  return (
    <>
      <div className="take-user-input">
        <textarea
          class="textarea"
          type="text"
          id="voiceInput"
          placeholder="Speak something..."
          value={transcript}


        />
        <div>
        <button className="inp-btn" onClick={() => startRecognition()}>Start Voice Input</button>
        </div>



      </div>
      <div className="output">

        {/* {preferedLang} */}
        <div className="select is-normal">
        <select name="language"
        className="select-tag"
          id="language"
          value={preferedLang}
          onChange={handleLanguageChange}>
          <optgroup>
            <option value="en">English</option>
            <option value="mr">Marathi</option>
            <option value="gu">Gujrati</option>

            {/* <option value="hi">Hindi</option> */}
            {/* <option value="sa">Sanskrit</option> */}
          </optgroup>
        </select>
        </div>
        <textarea
          class="textarea"
          type="text"
          id="voiceOutput"
          placeholder="Translate Here..."
          value={translatedOutput.transcript}


        />
        <button className="button" onClick={speak}>Speak</button>
        <i onClick={speak} class="fa-solid fa-volume-high"></i>

      </div>

    </>
  );
};

export default VoiceInput;

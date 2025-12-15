import React, { useState } from "react";
import FileUpload from "./FileUpload";
import ChatWindow from "./ChatWindow";
import "./App.css";
import { FaRobot } from "react-icons/fa";



function App() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="App">
      <h1 className="title">
  <FaRobot className="chat-icon" />
  <span className="title-text">DocuMind Assistant</span>
</h1>


       {!uploaded ? (
        <FileUpload setVectorReady={setUploaded} /> // pass the setter here
      ) : (
        <ChatWindow />
      )}
    </div>
  );
}

export default App;

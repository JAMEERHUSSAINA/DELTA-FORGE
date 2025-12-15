import React, { useState } from "react";
import { askQuestion } from "./api";
import "./ChatWindow.css";

const ChatWindow = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [errorPopup, setErrorPopup] = useState(false); // state for error popup

  const sendMessage = async () => {
    if (!question.trim()) return;

    // user message
    setMessages((prev) => [...prev, { type: "user", text: question }]);

    try {
      const res = await askQuestion(question);
      setMessages((prev) => [...prev, { type: "bot", text: res.answer }]);
    } catch (err) {
      // Show temporary popup instead of bot message
      setErrorPopup(true);
      setTimeout(() => setErrorPopup(false), 2000);
    }

    setQuestion("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.type === "user" ? "user-msg" : "bot-msg"}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
        type="text"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
      />
        <button onClick={sendMessage}>Send</button>
      </div>

      {/* Error popup */}
      {errorPopup && <div className="popup-message">❌ Upload documents first!</div>}
    </div>
  );
};

export default ChatWindow;

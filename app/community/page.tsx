"use client";
import { useState } from "react";

export default function CommunityPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  function postMessage() {
    if (!message) return;
    setMessages([...messages, message]);
    setMessage("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Community</h1>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message"
      />
      <button onClick={postMessage}>Post</button>

      <ul>
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

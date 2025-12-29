"use client";
import { useState } from "react";

export default function NotesPage() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  function addNote() {
    if (!note) return;
    setNotes([...notes, note]);
    setNote("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Notes</h1>

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note"
      />
      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

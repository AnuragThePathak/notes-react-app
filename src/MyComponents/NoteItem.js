import React from 'react';

export default function NoteItem({note, onDelete}) {
  const borderStyle = {
    marginBottom: "10px",
    border: "1px solid gray",
    borderRadius: "10px"
  }

  const noteStyle = {
    margin: "12px",
    overflowWrap: "break-word"
  }

  return (
    <div style={borderStyle}>
      <div style={noteStyle}>
        <h4>{note.title}</h4>
        <p>{note.description}</p>

        <button type={"button"} onClick={() => {
          onDelete(note)
        }} className={"btn btn-outline-danger"}>
          Delete
        </button>
      </div>
    </div>
  )
}
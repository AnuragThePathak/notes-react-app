import React from 'react';
import NoteItem from "./NoteItem";

export default function Notes(props) {
  return (
    <div className="container" style={{marginBottom: "110px",
    marginTop: "50px"}}>
      {props.notes.length ? props.notes.map((note, i) => {
        return <NoteItem note={note} key={i} onDelete={props.onDelete}/>
      }) : <h4 className="text-center">No notes yet.</h4>}
    </div>
  )
}
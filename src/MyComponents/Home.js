import React, {useEffect, useState} from 'react';
import AddNote from "./AddNote";
import Notes from "./Notes";

function Home() {
  const initList = localStorage.getItem("notes") ? JSON.parse(
    localStorage.getItem("notes")
  ) : []

  const [notes, setNotes] = useState(initList)
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  })

  function onDelete(note) {
    setNotes(notes.filter((n) => {
      return n !== note
    }))
  }

  function addNote(note) {
    setNotes([note, ...notes])
  }

  return (
    <div>
      <AddNote addNote={addNote}/>
      <Notes notes={notes} onDelete={onDelete}/>
    </div>
  )
}

export default Home;
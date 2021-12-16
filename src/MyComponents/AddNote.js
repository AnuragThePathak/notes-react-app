import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

function AddNote(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function addNote() {
    if (title || description) {
      const note = {title: title, description: description}
      props.addNote(note)

      setTitle("")
      setDescription("")
    }
  }

  const style = {
    padding: "12px",
    marginTop: "15px"
  }

  return (
    <div className={"container"} style={style}>
      <Form onSubmit={addNote}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={event => {
            setTitle(event.target.value)
          }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" placeholder="Enter description" onChange={event => {
            setDescription(event.target.value)
          }}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddNote;
import React, { useState } from "react";
import {
  MDBTextArea,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import "./style.css";

function InputArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <div className="InputArea">
      <form>
        <MDBCard className="m-5">
          <MDBCardBody>
            <MDBCardTitle>Input Note </MDBCardTitle>

            <MDBInput
              className="m-3"
              label="Notes Title"
              onChange={handleChange}
              value={note.title}
              type="text"
              name="title"
            />
            <MDBTextArea
              className="m-3"
              label="Message"
              onChange={handleChange}
              value={note.content}
              rows={6}
              name="content"
            />
            <button className="Button" onClick={submitNote}>
              SUBMIT
            </button>
          </MDBCardBody>
        </MDBCard>
      </form>
    </div>
  );
}

export default InputArea;

import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import InputArea from "./components/InputArea";
import { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notesItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <InputArea onAdd={addNote} />
      <MDBContainer>
        <MDBRow>
          {notes.map((noteItem, index) => {
            return (
              <MDBCol size="md-6 ">
                <Card
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default App;

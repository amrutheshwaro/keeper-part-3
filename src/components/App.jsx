import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = function () {
  const [notes, setNotes] = useState([]);

  const addNote = function (note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const deleteNote = function (id) {
    setNotes((prevNotes) =>
      prevNotes.filter((note, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note key={index} id={index} note={note} deleteNote={deleteNote} />
      ))}
      <Footer />
    </div>
  );
};

export default App;

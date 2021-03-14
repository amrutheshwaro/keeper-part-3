import React from "react";

const Note = function (props) {
  const handleClick = function () {
    return props.deleteNote(props.id);
  };
  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
};

export default Note;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  // Add a new note
  const addNote = () => {
    if (note.trim()) {
      const currentDate = new Date().toDateString();
      setNotes([...notes, { text: note, date: currentDate }]);
      setNote("");
    }
  };

  // Delete a note
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (

    <div className="">
      <Header />
      <div className="lg:flex lg:justify-center mt-5">
        <div className="bg-yellow-200 m-6 rounded-lg lg:w-1/3 ">
          <h1 className="font-semibold p-3 text-center">Note App</h1>
          <div className="p-3">
            <textarea className="resize-none p-3 shadow-md w-full text-md text-gray-900 bg-yellow-100 rounded-lg border border-yellow-300 focus:outline-none"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write your note here..."
              rows="4"
              cols="40"
            />
            <div className="flex justify-center mt-2 ">
              <button className=" p-2 bg-yellow-300 text-white  rounded-3xl shadow-md " onClick={addNote}>Add Note</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="">
        <div className="">
          <ul className="space-y-6 p-4 lg:grid lg:grid-cols-3 lg:gap-5 lg:mx-6 lg:space-y-0">
            {notes.map((note, index) => (
              <li className="border border-yellow-600  rounded-lg bg-yellow-200" key={index}>
                <p className="p-3 bg-yellow-100 m-2 ">{note.text}</p>
                <div className="flex justify-between px-3 py-2  "> <small>{note.date}</small>
                  <br />
                  <button className="text-red-600 " onClick={() => deleteNote(index)}>Delete</button></div>

              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
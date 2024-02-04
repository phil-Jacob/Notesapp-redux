import React, { useState, useEffect } from "react";
import format from "../Assets/format.svg";
import formatcolor from "../Assets/formatcolor.svg";
import formatleft from "../Assets/formatleft.svg";
import formatsize from "../Assets/formatsize.svg";
import formattext from "../Assets/formattext.svg";
import undo from "../Assets/undo.svg";
import redo from "../Assets/redo.svg";
import description from "../Assets/description.svg";
import mynotes from "../Assets/mynotes.svg";
import NoteContent from "./NoteContent";
import { useDispatch, useSelector } from 'react-redux';
import { addNote, updateNote, deleteNote } from '../Redux/noteSlice';

function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [editingNoteId, setEditingNoteId] = useState(null);


  const clearData = () => {
    setNewNote('');
  }

  useEffect(() => {
  }, [newNote.title, newNote.content]);

  const handleAddNote = () => {
    if (newNote.title.trim() === "" || newNote.content.trim() === "") {
    } else {
      if (editingNoteId !== null) {
        dispatch( updateNote({ ...newNote, id: editingNoteId }));
        setEditingNoteId(null);
      } else {
        dispatch(addNote({ ...newNote, id: Date.now() }));    
      }
       
      setNewNote({ title: "", content: "" });
    }
  };

  console.log(notes)

  const handleEditNote = (note) => {
    setNewNote(note);
    setEditingNoteId(note.id);
  };

  const handleDeleteNote = (noteId) => {
    dispatch(deleteNote(noteId));
    if (editingNoteId === noteId) {
      // Reset editing state if the currently edited note is deleted
      setEditingNoteId(null);
      setNewNote({ title: "", content: "" });
    }
  };

  return (
    <>

<div className='add-note-task-container'>
        <div className='add-note-task'>
          Add a Note
          <button className='add-note-task-quit' onClick={clearData}>X</button>
        </div>
        <div className='add-note-task-title'>
        <textarea value={newNote.title} maxLength={20} onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} className='add-note-task-title-column' placeholder='Title'></textarea>
        </div>
        <div className='add-note-task-input'>
         <textarea value = {newNote.content} maxLength={100} onChange = {(e) => setNewNote({ ...newNote, content: e.target.value })} className='add-note-task-input-box' placeholder='Take a note...'></textarea>
        </div>
        
        <div className='add-note-task-formatting-icons'>
        <button className='icon-button add'type='button' onClick={handleAddNote}>
          <img className='icon-button' alt="my-notes"src={mynotes}></img></button>
        <img className='icon-button'  alt="format-size" src={formatsize}></img>
        <img className='icon-button' alt="format-color" src={formatcolor}></img>
        <img className="icon-button" alt="format" src={format}></img>
        <img className="icon-button" alt="format-text" src={formattext}></img>
        <img className="icon-button" alt="format-left" src={formatleft}></img>
        <img className="icon-button" alt="undo" src={undo}></img>
        <img className="icon-button" alt = "redo" src={redo}></img>
        </div> 
      </div>

      <div className='notes-home'>
          <div><img alt="description" src={description}></img>My Notes</div>
          <div className='recent'>Recently viewed</div>
        
          <div className='notes-list'>
          {
                notes.map((note) => (
                    <NoteContent 
                    id = {note.id} title = {note.title}
                     content = {note.content} note = {note} handleEditNote = {handleEditNote} 
                     handleDeleteNote={handleDeleteNote}>
                    </NoteContent>
                ) )
            }
          </div>

        </div>
    </>
  );
}

export default Notes;

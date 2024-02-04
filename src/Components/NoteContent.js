import React from 'react'
import editnotes from '../Assets/editnotes.svg'  
import deletenotes from '../Assets/deletenotes.svg'

function NoteContent({id,title,content,note,handleEditNote,handleDeleteNote}) {
  return (
    <div className='note-des'>
    <div className='notes-header'>
     <div className='notes-title'>{title}</div>
     <div className='notes-icons'>
      <button type='button' className='icon-button' onClick={() => handleEditNote(note)}><img src={editnotes} alt=""></img></button>
      <button type='button' className='icon-button' onClick={() => handleDeleteNote(id)}><img src={deletenotes} alt=""></img></button>
      </div>
    </div>
    <div className='notes-content'>
      {content}
    </div>
    <div className='notes-days'>
     5 days ago
    </div>
   </div>   
  )
}

export default NoteContent
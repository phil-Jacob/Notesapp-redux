import NoteContent from "./NoteContent";
import TaskContent from "./TaskContent";
import { useSelector } from "react-redux";


function Home() {
 // const { selectedTaskId, setSelectedTaskId } = useSelectedTask();
 const notes = useSelector((state) => state.notes);
 const tasks = useSelector((state) => state.tasks);
  return (
  
    <div className="content">
      <div className="profile-name">
        <h1 className="home-profile-name">Welcome John</h1>
      </div>
      <div className='notes-home'>
          <div><i className='fas fa-sticky-note'></i>My Notes</div>
          <div className='recent'>Recently viewed</div>
            <div className='notes-list'>
            
          <div className="empty-notes-message"></div>
          <div className='notes-list'>
          {
                notes.map((note) => (
                    <NoteContent
                    id = {note.id} title = {note.title}
                     content = {note.content}>
                    </NoteContent>
                ) )
            }
          </div>
        
              </div>

        </div>
        
      <div className='tasks-home'>
        <div><i className='fas fa-tasks'></i>My Tasks</div>
        <div className='task-container'>           
        {
                tasks.map((task) => (
                    <TaskContent
                     id = {task.id} content = {task.title}
                    >
                    </TaskContent>
                ))
            }
        </div>
        </div>
        </div>
  )
}

export default Home
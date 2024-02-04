import React, { useState, useEffect } from "react";
import task_alt from "../Assets/task_alt.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Redux/taskSlice';
import TaskContent from "./TaskContent";

function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
   const [newTask, setNewTask] = useState({ title: "" });

  useEffect(() => {
  }, [newTask.title]);
  
  const handleAddTask = () => {
        if (newTask.title.trim() === "") {
    } else {
     dispatch(addTask({ ...newTask, id: Date.now() }));
      setNewTask({ title: "" });
    }
  };


  return ( 
    <div className="content">   
    <div className='add-note-task-container'>
    <div className='add-note-task'>
      Add a Task
      <div className='add-note-task-quit'>X</div>
    </div>       
    <div className='add-note-task-input'>
     <textarea value = {newTask.title} maxLength={35} onChange = {(e) => setNewTask({ ...newTask, title: e.target.value })} className='add-note-task-input-box' placeholder='Add a task...'></textarea>
    </div>
    <div className='add-note-task-clock'>
     
      <button type='button' className='icon-button' onClick={handleAddTask}>Add Task</button>
    </div>
  </div>
  <div className='tasks-home'>
  <div><img alt="task" src={task_alt}></img>My Tasks</div>
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
  );
}

export default Tasks;

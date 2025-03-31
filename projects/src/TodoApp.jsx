import React, { useState } from 'react';

function TodoApp() {
    const [lists, setLists]= useState(["walk the dog", "eat breack fast"]);
    const [newTask, setNewTasks]= useState("");

    function addTask(){
        if(newTask.trim() !== ""){
        setLists([newTask, ...lists])
    }
        setNewTasks("")
    }
    function handleChange(e){
      setNewTasks(e.target.value)
    }
    function deleteTask(index){
       setLists(lists.filter((_,i)=>(
        i !== index 
       )))
    }
  

   

    return (
        <div>
           <div>
            <input type="text" 
            placeholder='enter a task'
            value={newTask} 
            onChange={handleChange} 
            />
            <button onClick={addTask}  type='submit'>Add</button>
           </div>
           <ol> {lists.map((list,index)=>(
            <li key={index}>{list}  
            <button onClick={()=>deleteTask(index)}>delete</button></li>
            ))}   </ol>
        </div>
    );
}

export default TodoApp;
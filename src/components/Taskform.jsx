import { useState } from "react";

function TaskForm({ onAdd }){
    const [text, setText]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!text.trim()) return;
        onAdd(text);
        setText('');
    };
    return(
        <form  onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter the task"
          required="true"
          value={text}
          onChange={
            (e)=>setText(e.target.value)

          }
          className='flex-grow border px-3 py-2 rounded'
          />
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>Add</button>
        </form>

        );
}

export default TaskForm;

function TaskItem({task,onToggle,onDelete}){

    return(
        <li className="flex justify-between iems-center bg-gray-100 p-2 rounded">
            <span
             onClick={()=> onToggle(task.id)}
             className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
             >
                {task.text}

             </span>
             <button onClick={
                ()=>onDelete(task.id)}
                className='text-red-500 hover:text-red-700 ml-3'>✕</button>
             
        </li>
    );

}

export default TaskItem;
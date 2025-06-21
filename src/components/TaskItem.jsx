function TaskItem({task,onToggle,onDelete}){

    return(
        <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <span
             onClick={()=> onToggle(task.id)}
             className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'dark:text-gray-100'}`}
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
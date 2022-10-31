import React from 'react'


const TasksList = ({ tasks, setTasks, setEditTask }) => {

    const handleComplete = (task) =>{
        setTasks(
            tasks.map((item) =>{
                if(item.id === task.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    };
const handleEdit = ({id}) =>{
    const findTask = tasks.find((task) => task.id === id);
    setEditTask(findTask);
}

    const handleDelete = ({ id }) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }
  return (
    <div>
        {tasks.map((task) =>(
            <li className='list-item' key={task.id}>
            <input
             type='text' 
             value={task.title} 
             className='list'
             onChange={(event) => event.preventDefault()} 
             />
             <div>

                <button className='button-complete task-button' 
                onClick={() => handleComplete(task)}>
                 <i className='fa fa-check'></i>
                </button>

                <button className='button-edit task-button' onClick={() => handleEdit(task)}>
                 <i className='fa fa-edit'></i>
                </button>

                <button className='button-delete task-button'
                 onClick={()=> handleDelete(task)}>
                 <i className='fa fa-trash'></i>
                </button>
             </div>
            </li>
        )
         )}
    </div>
  )
}

export default TasksList
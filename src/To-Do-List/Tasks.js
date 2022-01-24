import Task from './Task';


function Tasks({ tasks, onDelete, onComplete }) {

    console.log({tasks});

    return (
        <div>
            {tasks.map((task) => (

                <Task task={task} key={task.id} onDelete={onDelete} onComplete={onComplete}/>

            ))}
        </div>
    )
}

export default Tasks

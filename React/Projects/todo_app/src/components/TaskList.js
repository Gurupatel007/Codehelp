import React from 'react'
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  console.log("tasks", tasks);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  )
}

export default TaskList
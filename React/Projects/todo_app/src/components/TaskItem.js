import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/Slices/TaskSlice';
import {toast} from 'react-hot-toast';

function TaskItem({task}) {

  console.log("task items: "+task);

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTask(task.id));
    toast.error("Task Deleted");
  }

  return (
    <div>
      <div className="flex justify-between items-center bg-white shadow-sm rounded-lg p-4 mb-4">
        <div>
          {/* <h2 className="text-lg font-semibold">{task.name}</h2> */}
          <p className="text-gray-500">{task.taskName}</p>
        </div>
        <div>
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Edit</button> */}
          <button onClick={deleteHandler} className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem

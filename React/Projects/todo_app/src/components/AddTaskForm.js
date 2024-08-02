import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/Slices/TaskSlice'

function AddTaskForm() {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        taskName: ''
    });

    const {allTasks} = useSelector(state => state.task);
    // console.log(tasks);

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(data.taskName.trim() === ''){
            return;
        }
        const newTask = {
            id: (allTasks.length + 1) || 1,
            taskName: data.taskName
        }
        dispatch(addTask(newTask));
        setData({
            taskName: ''
        })
    }

  return (
    <div className="max-w-md mx-auto mt-8">
        <form onSubmit={submitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
                    Task Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="taskName" name="taskName" value={data.taskName} onChange={changeHandler} />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Add Task
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddTaskForm

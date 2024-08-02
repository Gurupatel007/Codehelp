import {createSlice} from '@reduxjs/toolkit';

export const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        allTasks: [],
        filteredTasks: []
    },
    reducers :{
        addTask: (state,action)=>{
            state.allTasks.push(action.payload)
            state.filteredTasks = state.allTasks;
        },
        deleteTask: (state,action)=>{
            state.allTasks = state.allTasks.filter(task => task.id !== action.payload)
            state.filteredTasks = state.allTasks;
        },
        filterTask: (state,action)=>{
            if(action.payload.trim() === ''){
                state.filteredTasks = state.allTasks;
                // return;
            }else{
                state.filteredTasks =  state.allTasks.filter(task => task.taskName === action.payload)
            }
        }
    }
})
export const {addTask,deleteTask,filterTask} = TaskSlice.actions;
export default TaskSlice.reducer;
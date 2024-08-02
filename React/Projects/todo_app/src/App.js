import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import FilterTask from './components/FilterTask';
import { useSelector, useDispatch } from 'react-redux';
import { filterTask } from './redux/Slices/TaskSlice';

function App() {
  const { filteredTasks } = useSelector(state => state.task);
  const dispatch = useDispatch();

  const handleFilter = (filterText) => {
    dispatch(filterTask(filterText));
  };

  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <div>
          <AddTaskForm />
        </div>
        <div>
          <FilterTask setFilter={handleFilter} />
        </div>
        <div>
          <TaskList tasks={filteredTasks} />
        </div>
      </main>
    </div>
  );
}

export default App;
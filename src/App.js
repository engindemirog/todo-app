import logo from './logo.svg';
import './App.css';
import TodoList from './pages/TodoList';
import DailyTodoList from './pages/DailyTodoList';

function App() {
  return (
    <div className="App">
      <DailyTodoList/>
      <TodoList/>
    </div>
  );
}

export default App;

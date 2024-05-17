import "./App.css";
import TodoList from "./todoList/TodoList";
import Clock from "./todoList/Clock/Clock";

function App() {
  return (
    <div className="container">
      <TodoList />
      <Clock />
    </div>
  );
}

export default App;

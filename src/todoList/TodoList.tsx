import { useState } from "react";
import { Button } from "react-bootstrap";

import "./TodoList.css";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title = "오늘 할일";

  // todoList
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: true },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
  ]);

  // input todo item
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCheckedChange = (id: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              isChecked: !item.isChecked,
            }
          : item
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((prevItem) => [
        ...prevItem,
        {
          id: Date.now(),
          text: newTodo,
          isChecked: false,
        },
      ]);
    }
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div className="form">
          <input
            type="text"
            placeholder="할 일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button variant="warning" size="sm" onClick={addTodo}>
            추가
          </Button>
        </div>
        <div className="board">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckedChange(todo.id)}
                  checked={todo.isChecked}
                />
                <span onClick={() => handleCheckedChange(todo.id)}>
                  {todo.isChecked ? <del>{todo.text}</del> : todo.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

import { useState } from 'react';
import "./App.css";

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Curso React",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Medico",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Pagar contas",
      category: "Casa",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Supermercado",
      category: "Casa",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
        <TodoForm />
    </div>
  );
}

export default App

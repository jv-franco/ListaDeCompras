import { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import Search from "./Search";
import Filter from "./Filter";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

export default function Menu() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");

    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Alimento");

  const addTodo = (text, category, quantity) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        quantity,
        isCompleted: false,
      },
    ];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const todoPlus = (id) => {
    const newTodos = [...todos];
    const updateTodos = newTodos.map((todo) => {
      if (todo.id === id) {
        todo.quantity = todo.quantity !== 0 ? todo.quantity + 1 : todo.quantity;
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  const todoMinus = (id) => {
    const newTodos = [...todos];
    const updateTodos = newTodos.map((todo) => {
      if (todo.id === id) {
        todo.quantity = todo.quantity === 1 ? todo.quantity : todo.quantity - 1;
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Compras</h1>
      <TodoForm addTodo={addTodo} />
      <Search search={search} setSearch={setSearch} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        setSort={setSort}
        sort={sort}
      />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Alimento"
              ? a.category.localeCompare(b.category)
              : b.category.localeCompare(a.category)
          )
          .map((todo) => (
            <Todo
              completeTodo={completeTodo}
              todoPlus={todoPlus}
              todoMinus={todoMinus}
              removeTodo={removeTodo}
              key={todo.id}
              todo={todo}
            />
          ))}
      </div>
    </div>
  );
}

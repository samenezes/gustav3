import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Belo Horizonte, 28 graus",
      categoria: "Nacional"
    },
    {
      id: 2,
      text: "São Paulo, 19 graus"
      categoria: "Nacional"
    },
    {
      id: 3,
      text: "Toronto, 5 graus"
      categoria: "Internacional"
    };
  ]);

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")

  const addTodo =(text, categoria) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      categoria,
    }
  ]

  setTodos(newTodos)

  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filterTodos = newTodos.filter(todo =>
      todo.id !== id ? todo : null
      )
      setTodos(filterTodos)
  }

  return (
    <>
    <div className="app">
      <h1>Temperaturas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div classNAme="todo-list">
        {todos
        .filter((todo) => filter === "All"
        ? true
        : filter === "Completed"
        ? todo.isCompleted
        : !todo.isCompleted)
        .filter((todo) =>
        todo.text.toLocaleLowerCae().includes(search.toLocaleLowerCase())
        )
        .sort((a, b) => sort === "Asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
    </>
  );
 }

export default App

export default function Todo({
  todo,
  removeTodo,
  todoPlus,
  todoMinus,
  completeTodo,
}) {
  return (
    <div className={todo.isCompleted == true ? "todo bg-green-200 " : "todo"}>
      <div className="content">
        <p className="name">{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className="flex  items-center justify-center gap-3 sm:gap-7">
        <div className="flex items-center justify-around ml-7">
          <button
            onClick={() => todoMinus(todo.id)}
            className="isCompleted hover:bg-slate-100 duration-100  font-bold"
          >
            -
          </button>
          <h3 className="md:mx-5 sm:mx-2 mx-0 w-7 text-center">
            {todo.quantity}
          </h3>
          <button
            onClick={() => todoPlus(todo.id)}
            className="isCompleted  hover:bg-slate-100 duration-100  font-bold "
          >
            +
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <button
            onClick={() => completeTodo(todo.id)}
            className="isCompleted bg-green-50 text-green-500 hover:bg-green-500  hover:text-white "
          >
            V
          </button>
          <button
            onClick={() => removeTodo(todo.id)}
            className=" isCompleted  duration-100 bg-red-50 text-red-500 hover:bg-red-500  hover:text-white sm:mt-0 mt-2 ml-0 sm:ml-4"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

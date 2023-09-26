import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category || !quantity) return;
    addTodo(value, category, quantity);
    // limpar os campos
    setValue("");
    setCategory("");
    setQuantity("");
  };

  return (
    <div>
      <form
        className="flex flex-col justify-between border-b-4 pb-6 "
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type=" text"
            className="px-2 w-full h-10"
            value={value}
            placeholder="Digite o nome do Produto/Alimento"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="flex">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-2 md:w-auto w-full mr-3 h-10"
            >
              <option value="">Selecione uma categoria</option>
              <option value="Alimento">Alimento</option>
              <option value="Limpeza">Limpeza</option>
            </select>
            <input
              className="sm:w-1/6 w-2/6 px-2 h-10 text-center"
              type="number"
              min={1}
              value={quantity}
              placeholder="Qtd"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <button
              className="border opacity-95 bg-green-900 hover:bg-green-800 font-semibold duration-150 text-white md:w-40 w-full py-2"
              type="submit"
            >
              Adicionar a lista
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

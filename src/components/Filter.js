const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="flex justify-between w-full">
        <div className="filter_options">
          <div className="flex flex-col items-center">
            <p>Status:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">Todos</option>
              <option value="Completed">Completas</option>
              <option value="Incomplete">Incompletas</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="text-center">Ordem dos Produtos</p>
            <div className="flex items-center gap-5 justify-around">
              <button
                className="border w-24 bg-orange-100"
                onClick={() => setSort("Alimento")}
              >
                Alimento
              </button>
              <button
                className="border w-24 bg-blue-100"
                onClick={() => setSort("Limpeza")}
              >
                Limpeza
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

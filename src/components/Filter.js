const Filter = ({ filter, setFilter, setSort, sort }) => {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="flex sm:w-auto w-full justify-between ">
        <div className="filter_options">
          <div className="flex flex-col items-center">
            <p>Status:</p>
            <select
              className="sm:w-auto md:w-full w-auto"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">Todos</option>
              <option value="Completed">Completas</option>
              <option value="Incomplete">Incompletas</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <p className="text-center">Ordem dos Produtos</p>
            <div className="flex  w-full sm:flex-row flex-col items-center gap-5 justify-around">
              <button
                className={
                  sort === "Alimento"
                    ? "border sm:w-24 w-full bg-orange-300"
                    : "border sm:w-24 w-full bg-white"
                }
                onClick={() => setSort("Alimento")}
              >
                Alimento
              </button>
              <button
                className={
                  sort === "Limpeza"
                    ? "border sm:w-24 w-full bg-blue-300 "
                    : "border sm:w-24 w-full bg-white"
                }
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

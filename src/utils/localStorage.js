export function setLocalStorage(key, value) {
  if (typeof window !== "undefined") {
    // Verifica se o código está sendo executado no lado do cliente
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Erro ao salvar no Local Storage:", error);
    }
  }
}

export function getLocalStorage(key) {
  if (typeof window !== "undefined") {
    // Verifica se o código está sendo executado no lado do cliente
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Erro ao ler do Local Storage:", error);
      return null;
    }
  }
  return null; // Retorna null no lado do servidor
}

[
  {
    id: 1,
    text: "Arroz",
    category: "Alimento",
    quantity: 4,
    isCompleted: false,
  },
  {
    id: 2,
    text: "Feijão",
    category: "Alimento",
    quantity: 4,
    isCompleted: false,
  },
  {
    id: 3,
    text: "Desinfetante",
    category: "Limpeza",
    quantity: 4,
    isCompleted: false,
  },
];

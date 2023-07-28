// import React from 'react';

const TodoForm = () => {
  return (
    <div className="tdo-form">
      <h2>Nova tarefa</h2>
      <form>
          <input type="text" placeholder="Titulo" />
          <select>
              <option value="">Categoria</option>
              <option value="Estudo">Estudo</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Casa">Casa</option>
          </select>
          <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default TodoForm
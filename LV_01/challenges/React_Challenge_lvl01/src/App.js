import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([{id: "1",
  url: "https://github.com/ferjesusjs8/GO_Stack_frontend_reactjs_Challenge_lv01",
  title: "GO_Stack_frontend_reactjs_Challenge_lv01",
  techs: ["React", "Node.js"]}]);

  useEffect(() => {}, [repositories]);

  async function handleAddRepository() {
    const repository = { 
      id: "123",
      url: "https://github.com/josepholiveira",
      title: "Desafio ReactJS",
      techs: ["React", "Node.js"],
    };

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {

    console.log(id);
    const repositoryIndex = repositories.findIndex(repository => repository.id === id);
    console.log(repositoryIndex);

    if(repositoryIndex < 0){
        console.log(`${{error: "Project not found."}}`);
    };

    repositories.splice(repositoryIndex, 1);

    const list = repositories;

    setRepositories(list);

    if(repositories.length === 0){
      setRepositories([]);
    }
  }

  return (
    <div>

      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}

            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>
        Adicionar
      </button>
    </div>
  );
}

export default App;
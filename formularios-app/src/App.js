import { useState } from "react";

function App() {


  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  const [user, setUser] = useState({});


  function cadastrarUser(e) {
    
    e.preventDefault()

    setUser({
      nome:nome,
      email: email,
      idade: idade
    })
    


  }

  return (
    <div>
      <h1>
        Cadastrando usuario
      </h1>

      <form onSubmit={cadastrarUser}>
        <label>Nome:</label>
        <br />
        <input type="text" placeholder="Digite o nome"

          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <br />
        <input type="text" placeholder="Digite o email"

          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Idade:</label>
        <br />
        <input type="text" placeholder="Digite a idade"

          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <br />
        <br />

        <button>Cadastrar</button>
      </form>
      <br />
      <br />

      <div>
        <span>Nome: {user.nome}</span>
        <br />
        <span>Email:{user.email}</span>
        <br />
        <span>Idade:{user.idade}</span>
      </div>

    </div>
  );
}

export default App;

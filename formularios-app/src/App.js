import { useState} from "react";
function App() {

const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [idade, setIdade] = useState("");

const [user, setUser] = useState({});

  function enviarForm(e){

    e.preventDefault();
   

    setUser({
      nome: nome,
      idade: idade, 
      email: email,
    })
  }
  return (
    <div >
     <h1>Cadastrando usuario</h1>

      <form onSubmit={enviarForm}>

        <label>Nome:</label> <br/>
        <input type="text" placeholder="Digite o nome"
        
        value={nome}
        onChange={(e)=>setNome(e.target.value)}
      
        ></input> <br/>

        <label>Email:</label> <br/>
        <input type="text" placeholder="Digite o email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)} 
        
        ></input><br/>



         <label>Idade:</label> <br/>

        <input type="text" placeholder="Digite sua idade" 
        
        value={idade}
        onChange={(e)=>setIdade(e.target.value)}

        ></input><br/>


        <button type="submit">Registar</button> <br/><br/><br/>
      </form>

        <div>
          <span>Bem-vindo: {user.nome}</span> <br/>
          <span>Email: {user.email}</span> <br/>
           <span>Idade: {user.idade}</span> <br/>
        </div>
    
    </div>

    
  );
}

export default App;

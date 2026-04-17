import Nome from "./components/Nome";
import { useState } from "react";


function App() {

  const [aluno, setAluno] = useState("Sione")


  function mudarNome(nome){
    setAluno(nome)
  }

  
  return (
    <div >
      <h1>Component App</h1> <br />

      <Nome aluno="Sione" />
      <p>Olá {aluno}, usando useState</p>

      <button onClick={()=>mudarNome("Serrano Pedro")}>Mudar nome</button>
    </div>
  );
}

export default App;

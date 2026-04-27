import { useState, useEffect } from "react";


function App() {

  const [input, setInput] = useState("");

  const [tarefas, setTarefas] = useState([]);


  useEffect(()=>{

    //alert("Tarefas sofreu alteracao")
    



  }, [tarefas])


  function enviarTarefa(e){

    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');

  }

  
  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <form onSubmit={enviarTarefa}>
        
        <label>Nome da tarefa: </label> 
        <br/>
        <input type="text" placeholder="Digite a tarefa"
        
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <br/>
        <br/>
        
        <button>Registar</button>
      </form>
       <br/>
      <ul>
          {tarefas.map(index=>(
            <li>{index}</li>
          ))}
      </ul>
    
    </div>
  );
}

export default App;

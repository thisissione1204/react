import { useState, useEffect } from "react";
import './style.css'
function App() {

  const [nutri, setNutri] = useState([]);


  useEffect(() => {

    function app() {

      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          // console.log(json)
          setNutri(json)
        })
    }

    app();


  }, []);

  // useEffect(() => {
  //   console.log(nutri);
  // }, [nutri]);


  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((iten) => {
        return (
          <article key={iten.id} className="post">

            <strong className="titulo">{iten.titulo} </strong>

            <img src={iten.capa} className="imagem"/>

            <p className="subtitulo">{iten.subtitulo}</p>

            <button className="botao">Acessar</button>

          </article>
        )
      })}
    </div>
  );
}

export default App;

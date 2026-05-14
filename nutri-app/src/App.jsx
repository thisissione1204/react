import { useEffect, useState } from 'react'
import './style.css'


function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function nurti() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          setNutri(r);
          console.log(nutri);/*o valor de nutri ainda é o estado antigo nesse momento da execução. O React agenda a atualização e só depois faz um novo render.*/

        })
    }
    nurti();

  }, [])

  useEffect(() => {
    console.log(nutri); //agora sim o nutri ja tem o array de objetos
  }, [nutri])


  return (
    <>
      <div className='container'>
        <header>
          NUTRI-APP
        </header>

        {nutri.map((iten) => {
          return (

            <div key={iten.id}>

              <article >

                <strong className='titulo'>{iten.titulo}</strong>
                <img src={iten.capa} alt={iten.titulo} className='image' />
                <p className='subtitulo'>{iten.subtitulo}</p>
                <button className='botao'>Acessar</button>

              </article>

            </div>

          );
        })}


      </div>

    </>
  )
}

export default App

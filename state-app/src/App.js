import { useState, useEffect } from "react";

function App() {


  const [count, setCount] = useState(0);

  useEffect(() => {

    alert("Count foi alterado!")

  }, [count])



  return (
    <div>
      <h1>useState e useEffect</h1>
      <p>
        Count: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Diminuir</button>
    </div>
  );
}

export default App;

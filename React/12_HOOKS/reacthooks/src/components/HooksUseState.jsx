import { useState } from "react";

const HooksUseState = () => {
  // 1 - useState
  let userName = "Mila";
  const [name, setName] = useState("Tamires");

  const changeNames = () => {
    userName = "Maria";

    setName("Tamires Guedes");
  };

// 2- useState e input
const [age, setAge] = useState(18);

const handleSubmit = (e) => { 
  e.preventDefault();
  console.log(age);
}

  return (
    <div>
      <h2>Hooks UseState</h2>
      <p>UseState: {name}</p>
      <p>Variável: {userName}</p>
      <button onClick={changeNames}>Mudar Nomes</button>

      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
       <input type="submit" value="Enviar" />
      </form>
       <p>Sua idade é: {age}</p>
       <hr/>
    </div>
  );
};

export default HooksUseState;

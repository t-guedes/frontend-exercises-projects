import "./App.css";

// 2- imagem em assets
import night from "./assets/night.jpg"; // Importando a imagem

//3- useState
import Data from "./components/Data.jsx";

//4- renderização
import ListRender from "./components/ListRender";

//7- renderização condicional
import ConditionalRender from "./components/ConditionalRender";

//8 - props
import ShowUserName from "./components/ShowUserName";

//9- Desestruturando props
import CarDetails from "./components/CarDetails.jsx";

//11- Rederização de listas com componetes
const cars = [
  { id: 1, model: "296 GTB", brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, model: "Sportage", brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, model: "Q3", brand: "Audi", color: "Azul", km: 32000 },
];

//12- React Fragment
import Fragment from "./components/Fragment.jsx";

//13- Children
import Container from "./components/Container.jsx";

//14- Funçao como prop
import ExecuteFunction from "./components/ExecuteFunction.jsx";

// 15- state lift
import { useState } from "react";
import MessageState from "./components/MessageState.jsx";
import ChangeMessageState from "./components/ChangeMessageState.jsx";

function App() {
  //14- Funçao como prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15- state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div claassName="App" style={{ paddingBottom: "500" }}>
      <h1>Avançando no React</h1>
      {/* 1- imagem em public*/}
      <img src="/img.jpg" alt="alguma iamgem" />

      {/* 2- imagem em assets */}
      <img src={night} alt="Noite" />

      {/*3- useState*/}
      <Data />

      {/* 4- render de lista */}
      <ListRender />

      {/* 7- renderização condicional */}
      <ConditionalRender />

      {/* 8 - props */}
      <ShowUserName name="Tamires" />

      {/* 9- Desestruturando props*/}
      <CarDetails model="Polo" brand="VW" km={100000} color="Prata" />

      {/*10- Reaproveitamento de componetes  */}
      <CarDetails model="Fiesta" brand="Ford" km={150000} color="Prata" />
      <CarDetails model="Sandero" brand="Renault" km={10000} color="Verde" />

      {/*11- loop com array de obj */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          model={car.model}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      {/*12- React Fragment */}
      <Fragment />

      {/*13- Children */}
      <Container>
        <h2>Este é o conteúdo passado como children</h2>
        <p>Você pode passar qualquer elemento React aqui!</p>
        <p>Isso é útil para compor componentes de forma flexível.</p>
      </Container>

      {/*14- Funçao como prop */}
      <ExecuteFunction myFunction={showMessage} />

      {/* 15- state lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;

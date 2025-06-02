import "./App.css";

// 2- Importando o componente First Component
import FirstComponent from "./components/FirstComponent";

//4- Importando Template Expression
import TemplateExpression from "./components/TemplateExpression";

//5- Importando MyComponent
import MyComponent from "./components/MyComponent";

//6- Eventos
import Events from "./components/Events";

function App() {
  //3- comentários
  return (
    <>
      <div className="App">
        {/* 3 - Comentário dentro do JSX */}
        <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Events/>
      </div>
    </>
  );
}

export default App;

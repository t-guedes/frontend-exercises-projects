import "./App.css";

// 2- css de componente
import MyComponent from "../components/MyComponent";

// 6- CSS modules
import Title from "../components/Title";

function App() {
  // 4- incline style dinâmico
  const n = 15;

  // 5- classes dinamicas
  const redTitle = true;

  return (
    <div className="App">
      {/* 1- css global */}
      <h1>CSS no React</h1>
      
      {/* 2- css de componente */}
      <MyComponent />
      <p>Pegou o CSS do componenete (evitar fazer isso, pois pode vazar)</p>
      
      {/* 3- incline style */}
      <p style={{color: "pink", backgroundColor:"black", padding: "20px", borderTop: "1px dotted yellow"}}>Este elemento tem estilos incline</p>
     
      {/* 4- incline style dinâmico */}
      <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>CSS dinâmico</h2>
      <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>CSS dinâmico 2</h2>

      {/* 5- classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo pode ser vermelho (título c/ classe)</h2>
      
      {/* 6- CSS modules */}
      <Title /> 
    </div>
  );
}

export default App;

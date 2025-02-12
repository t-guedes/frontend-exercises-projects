// 1- adicionando eventos
const btn = document.querySelector("#my-button");
btn.addEventListener("click", function () {
  console.log("Clicou aqui");
});

const botao = document.querySelector(".botao");
botao.addEventListener("click", function () {
  console.log("Clicou em classe");
});

// 2- removendo eventos
const secondBtn = document.querySelector("#btn");
function imprimirMensagem() {
  console.log("Teste");
}
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3- argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4- propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento2");
});

// 5- removendo evento padrao
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Não alterou a página");
});

// 6- eventos de tecla
document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Pressionou a tecla ${e.key}`);
});

// 7- eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou o botão");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("Soltou o botão");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("clique duplo no botão");
});

// 8- movimento do mouse
document.addEventListener("mousemove", (e) => {
  console.log(`No eixo X: ${e.x}`);
  console.log(`No eixo Y: ${e.y}`);
});

// 9- evento de scroll
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    // O pageYOffset foi amplamente utilizado para obter a posição de rolagem vertical da página, mas atualmente é recomendado usar a propriedade scrollY!!!
    console.log("Passamos de 200px");
  }
});

// 10- evento de focus/blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
  console.log("Saiu do input");
});

// 11- evento de carregamento
window.addEventListener("load", () => {
  console.log("A página carregou");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Tem certeza que deseja sair?";
});

// 12- debounce
const debounce = (f, delay) => {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove", debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);
/*
A função debounce recebe dois parâmetros:
f: a função que queremos "controlar" para evitar execuções excessivas.
delay: tempo de espera antes de permitir a execução da função.
Dentro dela, há uma variável timeout, que armazena o identificador do temporizador (setTimeout).
A função retornada ((...arguments) => { ... }) é a que será chamada sempre que o evento ocorrer.
Se timeout já tiver um valor, significa que o temporizador ainda está contando, então ele é cancelado (clearTimeout(timeout)).
Um novo setTimeout é criado para chamar a função f após o tempo definido em delay.
Erro no código: a função f.apply(arguments) deveria ser f.apply(null, arguments) ou f(...arguments). O jeito como está escrito não funciona corretamente porque arguments não é um array puro.

Uso do debounce com mousemove
Toda vez que o usuário mover o mouse, a função passada para o debounce será chamada.
Como o mousemove dispara muitas vezes por segundo, o debounce faz com que a mensagem "Executando a cada 400ms" apareça somente após 400ms desde o último movimento detectado.
*/
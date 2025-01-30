// 1- Movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2- Selecionando por tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3-  Selecionando elementos por id
const title = document.getElementById("title");
console.log(title);

// 4- Selecionando elementos por classe
const product = document.getElementsByClassName("product");
console.log(product);

// 5- Selecionando elementos por css
const productQuery = document.querySelectorAll(".product"); // o . antecede o nome, pois product e a classe
console.log(productQuery);

const mainContainer = document.querySelector("#main-container"); // o # é porque é um ID
console.log(mainContainer);

// 6- inserBefore = criar um elemento antes de um outro elemento
const p = document.createElement("p"); //criando um novo elemento(tag)

const header = title.parentElement; //Aqui, title.parentElement retorna o elemento pai do title.
header.insertBefore(p, title); //O método insertBefore(novoElemento, elementoReferencia) insere p antes do title dentro do header.

// 7- appendChild = adicionar um elemento dentro de outro, elemento adicionado sera o último
const navLinks = document.querySelector("nav ul"); //O método document.querySelector("nav ul") busca o primeiro <ul> que estiver dentro de uma <nav> no documento.
const li = document.createElement("li"); //O método document.createElement("li") cria um novo elemento <li>, mas ele ainda não está no documento.
navLinks.appendChild(li); //O método appendChild(li) adiciona o novo <li> como o último filho da <ul>

// 8- replaceChild = para trocar um elemento
const h2 = document.createElement("h2"); //O método document.createElement("h2") cria um novo elemento <h2>, mas ele ainda não foi inserido no documento.
h2.textContent = "Meu novo título!"; //A propriedade textContent define o texto interno do <h2>, que agora conterá "Meu novo título!".
header.replaceChild(h2, title); //O método replaceChild(novoElemento, elementoAntigo) troca title por h2 dentro de header.

// 9- createTextNode = cria um nó de texto
const myText = document.createTextNode("Agora vamos colocar mais um título"); //O método document.createTextNode("Texto aqui") cria um nó de texto, que é um pedaço de texto sem um elemento HTML associado diretamente a ele.
console.log(myText); //O console.log(myText); imprime esse nó no console.

const h3 = document.createElement("h3"); //Aqui, criamos um elemento <h3>, mas ele ainda está vazio e não foi adicionado ao HTML.
h3.appendChild(myText); //O método appendChild(myText) adiciona o nó de texto dentro do <h3>.
console.log(h3); //O console.log(h3) imprimi assim: <h3>Agora vamos colocar mais um texto</h3>

mainContainer.appendChild(h3); //O método appendChild(h3) adiciona o <h3> dentro do elemento mainContainer.

// 10- trabalhando com atributos = setAttribute(Define ou altera um atributo de um elemento) e getAttribute(Obtém o valor de um atributo específico de um elemento. )
const firstLink = navLinks.querySelector("a");  //O método querySelector("a") busca o primeiro <a> dentro de navLinks (presumivelmente um <nav> ou <ul>).
console.log(firstLink); //console.log(firstLink); imprime esse link no console.

firstLink.setAttribute("href", "https://www.google.com"); // O método setAttribute("href", "https://www.google.com") define um novo valor para href.
console.log(firstLink.getAttribute("href")); //O método getAttribute("href") retorna o valor atual do href
firstLink.setAttribute("target", "_blank") //Isso faz com que o link abra em uma nova aba ao ser clicado.

// 11- altura e largura = offsetHeight e offsetWidth
const footer = document.querySelector("footer");

console.log(footer.offsetWidth); //offsetWidth retorna a largura total do elemento, incluindo: Largura do conteúdo, Padding, Bordas. Mas NÃO inclui a margem externa (margin)
console.log(footer.offsetHeight); //offsetHeight retorna a altura total do elemento, incluindo: Altura do conteúdo, Padding, Bordas. Mas NÃO inclui a margem externa (margin)

console.log(footer.clientWidth); //clientWidth retorna a largura do conteúdo, incluindo: Padding, mas NÃO inclui a borda E Nem a margem
console.log(footer.clientHeight); //clientHeight retorna a altura do conteúdo, incluindo padding, mas excluindo bordas e margens.

// 12- Posição do elemento = getBoundingClientRect
const product1 = product[0];
console.log(product1.getBoundingClientRect());

// 13- CSS com JS
mainContainer.style.color = "yellow";
mainContainer.style.backgroundColor = "#000";
mainContainer.style.paddingBottom = "15px";

// 14- alterando estilos de varios elementos
for (const li of listItens) {
  li.style.backgroundColor = "yellow";
}
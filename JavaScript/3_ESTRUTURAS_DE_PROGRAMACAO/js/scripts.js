// 1- Variáveis
let nome = "Tamires";
console.log(nome);

nome = "Tamires Guedes";
console.log(nome);

const idade = 23;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2- Mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10,
  b = 20,
  c = 30;
console.log(a, b, c);

const nomecompleto = "Tamires Guedes";
const nomeCompleto = "Samuel Pena";
console.log(nomecompleto);
console.log(nomeCompleto);

let _test = "Permitido";
let $test = "Permitido";
console.log(_test, $test);

// 3- prompt
const age = prompt("Digite a sua idade:");
console.log(`Você tem ${age} anos.`);

// 4- alert
alert("TESTANDO");

const z = 10;
alert(`O número é ${z}`);

// 5- Math
console.log(Math.max(5, 2, 1, 10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// 6- console
console.log("teste!");
console.error("error!");
console.warn("aviso");

// 7- if
const m = 1;
if (m > 5) {
  console.log("M é maior que 5!)");
}

const user = "João";
if (user === "João") {
  console.log("Olá João!");
}

if (user === "Maria") {
  console.log("Olá Maria!");
}

console.log(user === "João", user === "Maria");

// 8- else
const loggedIn = false;

if (loggedIn) {
  console.log("Está autenticado!");
} else {
  console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos");
} else {
  console.log("Os números não são mais altos");
}

// 9- else if
if (1 > 2) {
  console.log("TESTE");
} else if (2 > 3) {
  console.log("TESTE 2");
} else if (5 > 1) {
  console.log("AGORA SIM!");
}

const userName = "Tamires";
const userAge = 23;

if (userName === "Luana") {
  console.log("Bem-vindo Luana!");
} else if (userName === "Tamires" && userAge === 23) {
  console.log("Olá Tamires, você tem 23 anos");
} else {
  console.log("Nenhuma condição aceita!");
}

// 10- while

let p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
}

// =====================================================
// //loop infinito

// // let x = 10;

// // while (  x > 5){
// //   console.log(`Imprimindo ${x}`);
// //   fica infinito pois nao colocamos o incremento!
// // }

// =====================================================

// 11- do while

let o = 10;

do {
  console.log(`Valor de o: ${o}`);
  o--;
} while (o > 1);

// 12- For

for (let t = 0; t < 10; t++) {
  console.log("Repetindo algo...");
}

let r = 10;
for (r; r > 0; r = r - 1) {
  console.log(`o r está diminuindo: ${r}`);
}

// 13- identação

for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10!${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("deu 0 ");
    }
  }
}

// 14- break
for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`);

  if (g === 15) {
    console.log("O g é 15!");
    break;
  }
}

// 15- continue

for (let s = 1; s < 10; s = s + 1) {
  // operador de resto = %
  if (s % 2 === 0) {
    console.log("Número PAR " + s);
    continue;
  }

  console.log(s);
}

// 16- switch

const job = prompt("Qual é a sua profissão?");

switch (job) {
  case "Programador":
    console.log("Você é um Programador!");
    break;
  case "Advogado":
    console.log("Você é um Advogado!");
    break;
  case "Policial":
    console.log("Você é um policial!");
    break;
    default:
    console.log("Profissão nao encontrada")
}


// NÃO PODE ESQUECER O BREAK!!!
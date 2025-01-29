// 1- setTimeout
console.log("Ainda não executou parte I");

setTimeout(function () {
  console.log("Requisição assícrona");
}, 2000);

console.log("Ainda não executou parte II");

// 2- setInterval -> comentado por causa do loop infinito
// console.log("Ainda não começou parte I");

// setInterval(function () {
//   console.log("Intervalo assícrono");
// }, 3000);

// console.log("Ainda não começou parte II"); 

// 3- Promise

//Promessa = Objeto principal para criar as promise
//resolve = método que vai resolver nossa expressão inicial
//then = método que vai levar a promise em diante

const promessa = Promise.resolve(6 + 6);
console.log("Algum código");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora o valor é ${value}`));

console.log("Outro código");

// 4- Falha nas Promises
Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos");
    }
  })
  .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5- Rejeitando Promise
function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else {
      reject(new Error("Número muito baixo"));
    }
  });
}

const a = checkNumber(10);
const b = checkNumber(20);

console.log(a, b);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);
b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

// 6- resolvendo várias promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("Erro!");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

//7- Async functions
async function SomarComDelay(a, b) {
  return a + b;
}

SomarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é ${value}`);
});

console.log("Teste asyc functions");

// 8- async await
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a Promise");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a Promise, e esperando o resultado");
  const result = await resolveComDelay();
  console.log(`O resultado chego:u ${result}`);
}

chamadaAsync();

// 9- Generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

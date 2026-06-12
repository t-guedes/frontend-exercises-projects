// 1- Arrays
const numbers = [1, 2, 3, 4, 5];
numbers.push(5);
console.log(numbers[2]);
const names = ["Alice", "Bob", "Charlie"];
console.log(names[1]);
console.log(names);
// 2- outra sinxtaxe para arrays
const numbers2 = [1, 2, 3, 4, 5];
numbers2.push(6);
console.log(numbers2);
// 3- any (Evitar usar, mas é possível)
const array = [1, "two", true, { name: "Alice" }, [1, 2, 3]];
console.log(array);
array.push("new element");
console.log(array);
// 4- parametros de função
function soma(a, b) {
    console.log(a + b);
}
soma(6, 6);
// soma ("6", "6");
// 5- retorno de função
function greeting(name) {
    return `Hello, ${name}!`;
}
console.log(greeting("Tamires"));
//  6- função anônima
setTimeout(function () {
    const sallary = 2000;
    //console.log(parseFloat(sallary));
    console.log(`Your sallary is ${sallary}`);
}, 2000);
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
const objCoord = { x: 10, y: 5 };
passCoordinates(objCoord);
const pessoaObjto = {
    name: "Tamires",
    age: 24,
};
console.log(pessoaObjto);
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    //console.log('C: ' + c)
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 8);
// showNumbers(4)
// 9 - validando parâmetro opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Tamires", "Guedes"));
console.log(advancedGreeting("Luana"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(500);
showBalance("100");
//showBalance(true)
const arr1 = [1, "two", 3, "four", true];
console.log(arr1);
// 11 - mais sobre union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado'";
    }
    return `O usuário é um: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
console.log(showUserRole("Editor"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId('15');
showId(20);
function userDetails(user) {
    console.log(`Nome: ${user.name}`);
    console.log(`Sobrenome: ${user.surname}`);
}
userDetails({ name: 'Tamires', surname: 'Guedes' });
function showCoords(obj) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`);
}
const itemCoords = {
    x: 10,
    y: 15,
    z: 12,
};
showCoords(itemCoords);
const somePerson = { name: 'Patricia', age: 25 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types
let test;
test = 'testando';
// test = "opa"
console.log(test);
function showDirection(direction) {
    console.log(`The direction is: ${direction}`);
}
showDirection('left');
showDirection('center');
//showDirection("up")
// 16 - non-null assertion
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log;
console.log(n + 100n);
// 18 - symbol
let symbolA = Symbol('a');
let symbolB = Symbol('a');
console.log(symbolA === symbolB);
export {};
//# sourceMappingURL=index.js.map
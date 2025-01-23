const testSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testSlice.slice(2, 4); // aqui ele só vai retornar a 'c' e 'd', e não ao 4 item que é o 'e'
console.log(subArray);

console.log(testSlice);

const subArray2 = testSlice.slice(2, 4 + 1) // aqui vai retorna do 2 ao 4, pois colocamos o +1
console.log(subArray2)

const subArray3 = testSlice.slice(10, 20); //quando um intervalo de elementos que não existe retorna uma lista vazia '[]'
console.log(subArray3);

const subArray4 = testSlice.slice(2);
console.log(subArray4);
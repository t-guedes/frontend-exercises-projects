const myJson = '{"name": "Tamires", "age": 23, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJson);
console.log(typeof myJson);


// 28- JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

// JSON invalido
const badJson = '{"name": "Tamires, "age": 23}';
//const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject)
console.log(myJson);
console.log(typeof myJson);
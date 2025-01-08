// 1- Number
console.log('1- NUMBER');

console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2- Operações aritméticas
console.log('\n2- Operações aritméticas');

console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);
console.log(5 + (4 * 2));
 
// 3- Special numbers
console.log('\n3- Special numbers');

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4- Strings
console.log('\n4- Strings');

console.log("Um texto");
console.log(`Mais um texto`);
console.log('13');

console.log(typeof '13');

// 5- Símbolos especiais em string
console.log('\n5- Símbolos especiais em string');

console.log("Testando a \n quebra de linha")
console.log("Espaçamento \t de tab")

// 6- Concatenação
console.log('\n6- Concatenação');

console.log("Meu" + " texto" + " combinado");
console.log("Oi," + " tudo" + " bem?");

// 7- Interpolação(Template Strings)
console.log('\n7- Interpolação(Template Strings)');

console.log(`A soma de 2 + 2 é: ${2+2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log('teste')}`);

//8- Boolean
console.log('\n8- Boolean');

console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

// 9- Comparações
console.log('\n9- Comparações')

console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10- Comparação de idêntico
console.log('\n10- Comparação de idêntico');

console.log(9 == "9");
console.log(9 + "9");
console.log(9 === "9");
console.log(9 !== "9");
console.log(9 != "9");


// 11- Operadores lógicos
console.log('\n11- Operadores lógicos');

console.log(5 > 3 && 3 == 2);
console.log(5 > 3 || 3 == 1);

console.log(3 == 3 && "Matheus" == "Matheus");
console.log("Felipe" == "João" || false);

console.log(!(!(true && true)));

console.log(true && true);
console.log(false || false);


// 12- Empty values
console.log('\n12- Empty values');

console.log(typeof null, typeof undefined);
console.log( null === undefined);
console.log( null == undefined);
console.log( false == undefined);
console.log( null == false);

// 13- mudança de tipos
console.log('\n13- mudança de tipos');

console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1 );
console.log("10" - 1);
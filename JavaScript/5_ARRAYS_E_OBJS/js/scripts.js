// 1- Arrays
const lista = [1, 2, 3, 4, 5, 6];
console.log(lista);

console.log(typeof lista);

const itens = ["Tamires", true, 23, 1.53, []];
console.log(itens);


// 2- Mais sobre arrays - acessar cada elemento individual no array
const arr = ["a", "b", "c", "d", "e"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);


// 3- Propriedade
const numbers = [5, 3, 4];
console.log(numbers.length); // essa propriedade diz qual a quantidade de elemento na lista;
console.log(numbers['length']); // essa propriedade diz qual a quantidade de elemento na lista;

const myName = "Tamires"; // quantidade de caracteres que um strings tem
console.log(myName.length);


// 4- Métodos
const otherNumbers = [1, 2, 3]
const number = [5, 3, 4];

const allNumbers = number.concat(otherNumbers);  // concateno as listas, ou seja, elas se juntam!

console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase()); // deixa o texto emm maiúscul
console.log(typeof text.toUpperCase);
console.log(text.indexOf("t"))// e um método que eu tenho para encontrar a posição de um caractere.


// 5- Objetos
const person = {
    name: "Tamires",
    age: 23,
    job: "Programadora",
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);


// 6- criando e delatando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

// Agora vou ADICIONAR um item ao meu objeto
car.doors = 4;
console.log(car);

// Agora vou DELETAR um item ao meu 
delete car.km;
console.log(car);


// 7- Mais sobre Objetos
const obj = {
    a: "teste",
    b: true
}
console.log(obj instanceof Object); //  mostra que a 'const = obj' é uma instância do Object!

const objt2 = {
    c: []
}

// Agora o OBJT2 vai copiar as propriedade do OBJ
Object.assign(objt2, obj); // NOS PARANTESES: primeiro vem o objeto final, ou seja, o que eu quero que PEGUE as propriedades, e depois, o que eu quero que COPIE as propriedades.
console.log(objt2);

console.log(obj); // e assim não modificamos o original


// 8- conhecedno melhor os objetos
console.log(Object.keys(obj)); //assim entendemos como o objeto esta formado em questao de chave
console.log(Object.keys(objt2));
console.log(Object.keys(car));

console.log(Object.entries(car)); // assim consigo a chave e o valor, me entrega varias arrays(listas) que cada uma contém o nome da propriedade e o valor

// 9- Mutação
const a = {
    name: "Tamires",
};

const b = a; // aqui so cria uma referência

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;
console.log(a);
console.log(b);

delete b.age;
console.log(a);
console.log(b);

// 10- Loops em arrays
const users = ["Tamires", "Luana", "Geoavana", "Lorenah"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// 11- push e pop 
const array = ["a", "b", "c"];
array.push("d"); //estou ADICIONANDO um item (ultimo)
console.log(array);

console.log(array.length);

array.pop(); //estou REMOVENDO um item (ultimo)
console.log(array);

const itemRemovido = array.pop(); // esta retornando o item REMOVIDO
console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y"); //estou ADICIONANDO mais itens
console.log(array);


// 12- shift e unshift
const letters = ["a", "b", "c", "d"];
const letter = letters.shift(); //estou REMOVENDO um item (primerio)
console.log(letters); 

letters.unshift("y", "x", "w", "v"); //estou ADICIONANDO mais itens (primerio)
letters.unshift("z");
console.log(letters);


// 13- indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Abacaxi", "Abacate"];

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate")); //mostra a posição do repetido

console.log(myElements.indexOf("Mamão")) //quando não tem o item na lista retorna -1
console.log(myElements.lastIndexOf("Caju")); //quando não tem o item na lista retorna -1

// 14- Slice
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


// 15- forEach
const nums = [1, 2, 3, 4, 5];
nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primero post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});


// 16- Includes 
const brands = ["BMW", "Audi", "Vw"];
console.log(brands.includes("Audi")); //Ele retorna em um valor boolean, caso exista ou não o item!
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW");
} else {
    console.log("Não há essa marca") //eu que fiz a parte do else!
};


// 17- Reverse
const reverTest = [1, 2, 3, 4, 5];
reverTest.reverse();
console.log(reverTest); // retorna 5, 4, 3, 2, 1 , ele modificar o array original!

 
//18- trim
const trimTest = "     Testando   \n "; // ele remove os espaços em branco e os caracteres 
console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);


// 19- padStart
const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);  //ele vai retorna 0001 , pois o padStart insere um texto ao começo da string!

// padEnd
const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd) //ele vai retorna o 0001(padStart) +  000000(padEnd), pois o padEnd insere um texto no final da string = 0001000000!


// 20- split
const frase = "O rato roeu a roupa do rei de Roma";
const arrayDaFrase = frase.split(" ");
console.log(frase);
console.log(arrayDaFrase); // o split, ele dividi as string em array


//21- join 
const fraseDeNovo = arrayDaFrase.join(" ");
console.log(fraseDeNovo); // o join une o array = "O rato roeu a roupa do rei de Roma"

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`
console.log(fraseDeCompra);


// 22- repeat
const palavra = "Testando ";
console.log(palavra.repeat(6)) //a palavra "Testando" vai se repetir 6x


// 23- rest operator / reset parameters
const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args [i];
    }

    return total;
}

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(6, 6, 6, 5));
console.log(somaInfinita(1, 20, 34, 3424, 128812, 12, 23, 54, 12));


// 24- for .. of
const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 3));
console.log(somaInfinita2(6, 6, 6, 5));
console.log(somaInfinita2(1, 20, 34, 3424, 128812, 12, 23, 54, 12))


// 25- destructuring em objetos
const userDatails = {
    firstName: "Tamires",
    lastName: "Guedes",
    job: "Programadora",
};

const { firstName, lastName, job} = userDatails;
console.log(firstName, lastName, job);

// renomear variaveis 
const { firstName: primeiroNome} = userDatails;
console.log(firstName);


// 26- destructuring em arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"];
const [veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC); // ele só vai destrutura os itens que eu pedi!


// 27- JSON
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
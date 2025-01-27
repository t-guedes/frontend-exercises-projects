// 1- Métodos
const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au au");
  },
};

console.log(animal.nome);
animal.latir();


// 2- Aprofundando em métodos
const pessoa = {
  nome: "Tamires",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  }
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Maitê");
console.log(pessoa.getNome());


// 1. Definição do Objeto pessoa
// O objeto é criado com o literal {} e possui:

// Uma propriedade:
// nome: "Tamires"
// Isso significa que o objeto tem um atributo chamado nome, com o valor inicial "Tamires".

// Dois métodos (funções associadas ao objeto):

// getNome: Serve para retornar o valor da propriedade nome.
// setNome: Serve para alterar o valor da propriedade nome.

// 1. metodo getNome
// Esse método retorna o valor da propriedade nome.
// Aqui, a palavra-chave this se refere ao próprio objeto pessoa, permitindo acessar suas propriedades.
// No caso, this.nome retorna "Tamires" inicialmente.

// 2. metodo setNome
// Esse método altera o valor da propriedade nome.
// Ele recebe um argumento novoNome e atribui esse valor à propriedade nome do objeto.
// O uso de this.nome garante que estamos modificando o atributo do próprio objeto.

// 3. Uso do Objeto no Código

// a) console.log(pessoa.nome);
// Aqui você acessa diretamente a propriedade nome do objeto pessoa.
// O resultado impresso no console é: Tamires
// b) console.log(pessoa.getNome());
// Aqui você chama o método getNome, que retorna o valor da propriedade nome usando this.nome.
// O resultado também será: Tamires
// c) pessoa.setNome("Maitê");
// O método setNome é chamado com o argumento "Maitê".
// Ele altera o valor da propriedade nome do objeto para "Maitê".
// Agora, a propriedade nome contém o valor "Maitê".
// d) console.log(pessoa.getNome());
// Você chama novamente o método getNome.
// Como o valor da propriedade nome foi alterado para "Maitê", o resultado será: Maitê

// O objeto pessoa começa com o nome igual a "Tamires".
// Usamos getNome para verificar o nome, que inicialmente é "Tamires".
// O método setNome altera o valor de nome para "Maitê".
// Quando chamamos getNome novamente, ele reflete a alteração e retorna "Maitê"


// 3- Prototype
const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));


// 4- Mais sobre o Prototype
const myObject = {
    a: "b",
};
console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObject);


// 5- Classes básicas
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);


// 6- Função como classe - função CONSTRUTORA
function criarCachorro(nome, raca){
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira-lata");
console.log(bob);


const bolinha = criarCachorro("Bolinha", "Poodle");
console.log(bolinha);

console.log(Object.getPrototypeOf(bolinha));


// 7- Funções como classe
function Cachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");
console.log(husky);


// 8-metodos na função construtora
Cachorro.prototype.uivar = function () { //uivar e uma nova função
    console.log("Auuuuu!");
};
console.log(Cachorro.prototype);
husky.uivar();


// 9- Classes ES6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);
console.log(Object.getPrototypeOf(jeff));


// 10- mais sobre classes 
class Caminhao {
    constructor(exios, cor) {
        this.exios = exios;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.exios} exios e é da cor ${this.cor}`);
    }
}

const scaneia = new Caminhao(6, "Vermelha");
console.log(scaneia);
scaneia.descreverCaminhao();

Caminhao.motor = 4; //isso não vai funcionar, não podemos atribuir um valor a propriedade assim!

const c2 = new Caminhao(4, "Preta");
console.log(c2);
console.log(c2.motor); //retorna undefined

//forma correta de adicionar 
Caminhao.prototype.motor = 4.0
const c3 = new Caminhao(6, "Azul")
console.log(c3.motor);


// 11- Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const tamires = new Humano("Tamires", 23);
console.log(tamires);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";
console.log(tamires.idade);
console.log(Humano.prototype.idade);


// 12- Symbols em classes
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotos = Symbol();
Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);


// 13- Getters e Setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "É um ppost sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js";
console.log(myPost);


// 14- Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas); // aqui, estou enviado a propriedade patas para alterar o valor de patas na classe pai, linha 263(this.patas = patas).
        this.nome = nome;
    }
}

const lui = new Lobo(4, "Lui");
console.log(lui);
console.log(lui.patas);


// 15- instanceof = verifica se um objeto é pai de outro
console.log(lui instanceof Lobo);
console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Mamifero);
console.log(new Post("a", "b") instanceof Cachorro);
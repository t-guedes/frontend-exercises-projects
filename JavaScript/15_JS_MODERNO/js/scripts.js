// 1- var, let e const
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}
console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}
console.log(a);

function logName() {
  const name = "Tamires";
  console.log(name);
}

const name = "Luana";

logName();
console.log(name);

// 2- arrow function
const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;
console.log(sum(5, 5));

console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return `Hello ${name}!`;
  } else {
    return "Helllo";
  }
};

console.log(greeting("Tamires"));
console.log(greeting());

const user = {
  name: "Samuel",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 1000);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 2000);
  },
};

user.sayUserName();
user.sayUserNameArrow();

// 3- Filter
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n;
    }
});
console.log(highNumbers);

const users = [
    {name:"Tamires", available: true},
    {name:"Mari", available: false},
    {name:"Rafaela", available: true},
    {name:"Carol", available: false},
    {name:"Lorenah", available: true},
]

const availableUsers = users.filter((user) => user.available);
console.log(availableUsers);


// 4- map
const products = [
  { name: "Camisa", price: 10.99, category: "Roupa" },
  { name: "Chaleira elétrica", price: 150, category: "Eletro" },
  { name: "Fogão", price: 999, category: "Eletro" },
  { name: "Calça jeans", price: 99.99, category: "Roupa" },
];

products.map((product) => {
  if (product.category === "Roupa") {
    product.onSale = true;
  }
});

console.log(products);

// 5- template literals
const userName = "Tamires";
const age = 23;

console.log(`O nome do usuário é ${userName} e ela tem ${age} anos!`);

// 6- destructuring
const fruits = ["Maçã", "Mamão", "Laranja"];

const [f1, f2, f3] = fruits;

console.log(f1);

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Cinza",
};

const {
  name: productName,
  price: productPrice,
  category: productCategory,
  color,
} = productDetails;

console.log(
  `O nome do produto é ${productName}, custa R$${productPrice} e é da cor ${color}.`
);

// 7- spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3); //unimos duas lista em uma só

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 100000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

// 8- classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola V", 20);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

// 9- heranca
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são: ");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, [
  "Preto",
  "Amarelo",
  "Verde",
]);

console.log(hat.name);

hat.showColors();
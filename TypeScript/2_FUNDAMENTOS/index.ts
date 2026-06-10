// 1- Numbers
let x: number = 10
console.log(x)

x = 16
console.log(x)
console.log(typeof x)

const y: number = 15.584848
console.log(y)
console.log(y.toPrecision(3))

// 2- Strings
let firstName: string = "Tamires"
console.log(firstName.toUpperCase())

let fullName: string    

const lastName: string = "Guedes"

fullName = firstName + " " + lastName   

console.log(fullName)
console.log(typeof fullName)

// 3- Boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true
console.log(a)
console.log(typeof a)

// 4- Inference e Annotation
let ann: string = "Teste" // Annotation

let inf = "Teste" // Inference
console.log(inf)

// ann = 1
// inf = 1
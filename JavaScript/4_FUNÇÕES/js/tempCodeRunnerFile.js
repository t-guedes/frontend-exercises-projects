function factorial(x) {
    if(x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;
const result = factorial(num);
console.log(`O fatorial ${num} é ${result}`);
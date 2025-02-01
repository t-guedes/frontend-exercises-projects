//  8- valor dafault
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
};
console.log(customGreeting("Charles"));
console.log(customGreeting("Samuel", "Bom dia"));

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
};

repeatText("Testando...");
repeatText("Agora repete 6 vezes", 6);

const job = prompt("Qual é a sua profissão?");

switch (job) {
  case "Programador":
    console.log("Você é um Programador!");
    break;
  case "Advogado":
    console.log("Você é um Advogado!");
    break;
  case "Policial":
    console.log("Você é um policial!");
    break;
    default:
    console.log("Profissão nao encontrada")
}

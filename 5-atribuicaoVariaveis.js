console.log("Trabalhando com atribuição de variáveis");

const idade = 29;
let nome = "Ricardo"; //Let é uma váriavel que varia (inconstante).
const sobrenome = "Bugan";

console.log(nome,"sobrenome");
//A virgula funciona como uma separação.
console.log(nome + " " + sobrenome) //Atribuição.

console.log(`Meu nome é ${nome} ${sobrenome}`); //Interpolação de variáveis

nome = nome + sobrenome;
console.log(nome);
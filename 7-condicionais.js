console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 25
const estaAcompanhada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //Removendo item
}
else if(estaAcompanhada == true){
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(1,1); //Removendo item
    }
    else{
        console.log("Venda proibida para menores de 18 anos.")
    }

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
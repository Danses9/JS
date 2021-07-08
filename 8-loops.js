console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; // || sinal de OU

let contador = 0;
while(contador < 3){ //enquanto
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existente");
    }
    else{
        console.log("Destino inexistente")
    } 
    contador += 1; 
}
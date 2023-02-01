// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
    return x + dois;
}   

function dividirDois(x) {
return x / dois;
}
console.log(somarDois(4)); 
console.log(dividirDois(6)); 

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero <= 50; numero++) { // Apenas usar let ao invés de var
console.log(numero);
}

const total = 10 * numero;
console.log(total);

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas); // RES -  por conta que o let e const manterem o escopo do bloco.
}

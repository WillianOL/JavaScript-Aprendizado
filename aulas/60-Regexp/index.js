const p = document.querySelector('p').innerHTML
// Regex são expressões utilizadas realizar buscas / substituições de padrões em strings. Elas devem estar entre //

// Vai procurar o "a" que aparece
const padraoRegex = /a/ 
const texto = "Willian";
const trocarLetra = texto.replace(padraoRegex, "E")
console.log(trocarLetra) // WilliBn

// Literal
const padraoRegex2 = "Java"
"JavaScript".replace(padraoRegex2, "Type"); // TypeScript

// Flag: g
// É a flag global, ou seja, pega todos os caracteres que aparecerem na palavra ou texto.
const flagG = /a/g;
const padraoRegex3 = "Palavra aleatoria".replace(flagG, "i");
console.log(padraoRegex3) // Pilivri ileitorii

// Flag: i
// Faz o padrão ignorar a diferença entre maiúscolas e minúscolas.
const flagI = /ba/gi
const padraoRegex4 = "Bateu batido".replace(flagI, "me")
console.log(padraoRegex4); // meteu metido

// Character class
// Se colocarmos os caracters entre [] estamos definindo uma classe. Exemplo, se colocarmos /[ab]/gi estamos selecionando "a" e "b", não "ab"
const flagWI = /[wi]/gi
const padraoRegex5 = "O Willian quebrou o carro".replace(flagWI, "H")
console.log(padraoRegex5); // O HHllHan quebrou o carro

// Dentro dela pode-se selecionar caracteres especi
const flagPeV = /[.,]/gi
const padraoRegex6 = p.replace(flagPeV, "==")
console.log(padraoRegex6);

// Selecionar um ou outro
// Fazendo isso colocando a palavra e colocando os dois caracteres que mudaram nela
const regex1 = /bra[sz]il/gi
const padraoRegex7 = "Brasil e Brazil".replace(regex1, "Pais")
console.log(padraoRegex7) // Pais e Pais

// De A a Z, a a z, 0 a 9
// Selecionar de algo até alguma coisa
const AaZ = /[A-Z]/g
const aAz = /[a-z]/g
const de0a9 = /[0-9]/g
const padraoRegex8 = "ABCDEFGHIJK".replace(AaZ, "0") // 000000000
const padraoRegex9 = "abcdefghijk".replace(aAz, "1") // 111111111
const padraoRegex10 = "0123456789".replace(de0a9, "L") // LLLLLLLLLL
console.log(padraoRegex8);
console.log(padraoRegex9);
console.log(padraoRegex10);

// Negação
// Com o "^" podemos selecionar tudo menos o que for escolhido. Por exemplo: /[^0-9]/g vai selecionar tudo menos os números
const regex2 = /[^a-z-" "]/gi // tudo menos de a a z e os espaços
const padraoRegex11 = "Esse é0um10 ca0273rro daora02".replace(regex2, "")
console.log(padraoRegex11);

// O "." seleciona tudo mesno quebra de linha
const regex3 = /./gi
const padraoRegex12 = p.replace(regex3, "0")
console.log(padraoRegex12);

// /\w/ Seleciona tudo o que for alfanumérico(não seleciona acentos(é) e caracteres especiais)
const regex4 = /\w/g
const padraoRegex13 = "Javascript, é a 1º do mundo!!".replace(regex4, "0")
console.log(padraoRegex13);
const regex5 = /\W/g
const padraoRegex14 = "Javascript, é a 1º do mundo!!".replace(regex5, "0")
console.log(padraoRegex14);

// /\d/ seleciona tudo aquilo que for digito(0, 1, 2, 3...)
const regex6 = /\d/g
const padraoRegex15 = "10 - 9, é igual a 1.".replace(regex6, "-")
console.log(padraoRegex15)

// /\s/ Seleciona tudo o que for espaço em branco(quebra de linha também)
const regex7 = /\s/g
const padraoRegex16 = "     Amanhã é um dia especial".replace(regex7, "0")
console.log(padraoRegex16)
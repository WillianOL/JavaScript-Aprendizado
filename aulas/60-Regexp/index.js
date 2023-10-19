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

// Quantificador
// Forma se selecionar uma quantidade especifica de caractéres
const regex8 = /i{2,}/g // Vai selecionar os i's apartir de 2 caracteres seguidos
const padraoRegex17 = "Vaiiiiii, corinthians!!!".replace(regex8, "i")
console.log(padraoRegex17)

// Com isso, podemos por exemplo selecionar palavra por palavra em vez de caracter por caracter com o \w
const regex9 = /\w{2,}/g // Vai selecionar a sequencia de caracter a partir de 2
const padraoRegex18 = p.replace(regex9, "X")
console.log(padraoRegex18)

// Utilizando o "+", da na mesma
const regex10 = /\w+/g
const padraoRegex19 = p.replace(regex10, "%")
console.log(padraoRegex19)

// Utilizando o "*" também funciona, mas ele seleciona quando existir 0 ou mais ocorrências
const regex11 = /-\d*/g // Vai selecionar todo digito que começar com "-"
const padraoRegex20 = p.replace(regex11, "-XXX")
console.log(padraoRegex20)

// "?" é o opcional, pode ter ou não algo
const regex12 = /Vamos?/gi // Pode ou não ter o "s"
const padraoRegex21 = "Vamos a praia. vamo nadar!".replace(regex12, "Vamos")
console.log(padraoRegex21)

// "|" seleciona ou um ou outro. Como se fosse o ||("ou" lógico)
const regex13 = /Está|ainda|bastante/gi
const padraoRegex22 = "Está manhã estudei Regex, e ainda treinei bastante!!".replace(regex13, "**")
console.log(padraoRegex22)

// \b seleciona palavras que estejam entre espaços em branco
const regex14 = /\bBrinca\b/gi
const padraoRegex23 = "Fui brinca, mas eles já estavam brincando".replace(regex14, "XX")
console.log(padraoRegex23);

// " ^ " é possível informar que a busca deve ser iniciada no início da linha.
const regex15 = /^\w+/gm // Flag m aplica para cada linha
const padraoRegex24 = 
`emailcontato@gmail.com
emailprincipal@gmail.com`.replace(regex15, "X")
console.log(padraoRegex24)

// " $ " é possível informar que a busca deve ser iniciada no final da linha.
const regex16 = /\w+$/gm // Flag m aplica para cada linha
const padraoRegex25 = 
`emailcontato@gmail.com
emailprincipal@gmail.com`.replace(regex16, "X")
console.log(padraoRegex25)

// \n seleciona as quebras de linhas de cara linha

// Seleção unicode - cada caracter tem seu código. Para selecionar pelo código basta colocar \u e o código
const regex17 = /\u0040+/g // @
const padraoRegex26 = "emailcontato@gmail.com".replace(regex17, "--")
console.log(padraoRegex26)


// Padrões Regex
// CEP
// /\d{5}[-\s]?\d{3}/g - Uma sequência de 5 digitos, depois pode ter o "-" ou espaço(são opcionais), depois uma sequência de 3 digitos
const cepValidation = /\d{5}[-\s]?\d{3}/g
const ceps = [
    '57690000',
    '57690-000',
    '57690 000'
]
const arrayCeps = [];

for(cep1 of ceps) {
    console.log(cep1, cep1.match(cepValidation))
}

// CPF
const cpfValidation = /(\d{3}[.-]?){3}\d{2}/g
const cpfs = [
    '000.000.000-00',
    '000-000-000-00',
    '000.000.000.00',
    '000000000-00',
    '00000000000'
]

for(cpf1 of cpfs) {
    console.log(cpf1, cpf1.match(cpfValidation))
}

// CNPJ
const cnpjValidation = /\d{2}[.-]?(?:\d{3}[.-]?){2}\/?\d{4}[.-]?\d{2}/g;
const cnpjs = [
    '00.000.000/0000-00',
    '00000000000000',
    '00-000-000-0000-00',
    '00.000.000/000000',
    '00.000.000.000000',
    '00.000.000.0000.00',
  ];

for(c of cnpjs) {
    console.log(c, c.match(cnpjValidation))
}

// Celular
const celularValidation = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}/g
const celulares = [
    '+55 11 98888-8888',
    '+55 11 98888 8888',
    '+55 11 988888888',
    '+55 11988888888',
    '+5511988888888',
    '5511988888888',
    '11 98888-8888',
    '11 98888 8888',
    '(11) 98888 8888',
    '(11) 98888-8888',
    '11-98888-8888',
    '11 98888 8888',
    '11988888888',
    '11988888888',
    '988888888',
    '(11)988888888',
    '98888 8888',
    '8888 8888'
]

for(cel of celulares) {
    console.log(cel, cel.match(celularValidation))
}

// Email
const emailValidation = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
const emails = [
    'email@email.com',
    'email@email.com.org',
    'email-email@email.com',
    'email_email@email.com',
    'email.email23@email.com.br',
    'email.email23@empresa-sua.com.br',
    'c@contato.cc',
]

for(emai of emails) {
    console.log(emai, emai.match(emailValidation))
}
// async para dizer que a função é asincrona
async function pegarDados() {
    //Usar await indicar que a promise irar esperar. await só vai em partes que retornam uma promesa
    const dadosPessoais = await fetch("./usuario.json")
    const dados = await dadosPessoais.json()
    console.log(dados)
}
pegarDados();

// Async-await é a mesma coisa de usar o then, a diferança está em sua sintax.
function pegarDados2() {
    const dadosPessoais2 = fetch("./usuario.json");
    dadosPessoais2.then(r => r.json())
    .then(dados => console.log(dados))
}
pegarDados2();

// Mesma coisa do then e cath, podendo passar um parâmetro no catch com o erro
async function tryCatch() {
    try{
        const dadosPessoais = await fetch("./usuario.json")
        const dados = await dadosPessoais.json()
        console.log(dados)
    }
    catch(erro){
        console.log(erro)
    }   
}
tryCatch();

async function pegarDados3() {
    const dadosUsuario = await fetch("./usuario.json")
    const dadosCarro = await fetch("./carro.json")

    const dadoUsuario = await (await dadosUsuario).json();
    const dadoCarro = await (await dadosCarro).json();

    console.log(dadoUsuario, dadoCarro)
}
pegarDados3();
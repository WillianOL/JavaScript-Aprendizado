const promesa = new Promise((resolve, reject) =>{
    const condicao = true;

    // A maioria das promises vem acompanhadas de condições
    if(condicao){
        setTimeout(() => {
            resolve({nome: "Willian", idade: 18});
        }, 1000)
    } else{
        reject(Error("Não funcionou"))
    }
})

// O parâmetro do then é o valor que está dentro do resolve.(argumanto)
const retorno = promesa
.then((resolucao) => {
    resolucao.profissao = "Desenvolvedor front-end"
    return resolucao
})
.then((resultado2) => {
    resultado2.pais = "Brasil"
    return resultado2
})
.catch((casoRejeitada) => {
    console.log(casoRejeitada);
})
// {nome: "Willian", idade: 18}

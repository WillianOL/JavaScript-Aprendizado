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
let objetoFinal;
promesa.then((resolucao) => {
    return resolucao
}).then((resultado2) => {
    return resultado2.pais = "Grecia"
}).then((final) => {;
})
// {nome: "Willian", idade: 18}

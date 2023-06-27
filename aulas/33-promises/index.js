const promesa = new Promise((resolve, reject) => {
    const condicao = false;

    // A maioria das promises vem acompanhadas de condições
    if (condicao) {
        setTimeout(() => {
            resolve({ nome: "Willian", idade: 18 });
        }, 1000);
    } else {
        reject(Error("Não funcionou"));
    }
});

// O parâmetro do then é o valor que está dentro do resolve.(argumanto)
const retorno = promesa
    .then((resolucao) => {
        resolucao.profissao = "Desenvolvedor front-end";
        return resolucao;
    })
    .then((resultado2) => {
        resultado2.pais = "Brasil";
        return resultado2;
    },
    casoRejeitada => {
        // catch vai ser executada caso a promise seja rejeitada
        console.log(casoRejeitada);
    })
    .finally(() => { // finally vai ser executado sempre, independente do resoltado da promise
        console.log("Fim da promesa");
    })

const login = new Promise((resolve) => {
    resolve("Usuário fez o login")
})

const dados = new Promise((resolve) => {
    resolve("Dados carregados")
})

const carregouTudo = Promise.all([login, dados])
console.log(carregouTudo);
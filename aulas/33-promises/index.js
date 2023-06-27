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
    setTimeout(() => {
        resolve("Usuário fez o login")
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Dados carregados")
    }, 1500)
})

// Com o OBJETO Primise e o método .all podemos pegar o resultado das promises e armazenar dentro de uma array
const carregouTudo = Promise.all([login, dados])

carregouTudo.then((resolucao) => {
    console.log(resolucao);
})
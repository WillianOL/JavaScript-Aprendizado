const promesa = new Promise((resolve, reject) =>{
    const condicao = false;

    if(condicao){
        resolve("Funcionou!");
    } else{
        reject(Error("Não funcionou"))
    }
})

console.log(promesa);
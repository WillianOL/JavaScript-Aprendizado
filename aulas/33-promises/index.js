const promesa = new Promise((resolve, reject) =>{
    const condicao = false;

    if(condicao){
        resolve({});
    } else{
        reject(Error("Não funcionou"))
    }
})

promesa.then(() => {

})
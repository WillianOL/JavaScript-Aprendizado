// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const itens = document.querySelectorAll("li")
for ( li of itens ) {
    li.classList.add("ativado");
    console.log(li);
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (propie in window) {
    console.log(propie);
}
// Forma especifica de pegar todos os formulários do HTML. Seleciona pelo name.
// Retorna uma HTMLCollection em forma de array
const Allforms = document.forms
console.log(Allforms);

// Forma de selecionar um único formulário, também seleciona pelo name
const formContato = document.forms.contato
console.log(formContato);

// Forma de selecionar um item especifico do formulário
const inputForm = formContato.nome

const formulario = document.querySelector("#contato")
console.log(formulario.elements); // elementos do formulario - inputs, textarea e etc;
console.log(formulario.elements[2]); // como é uma array, pode-se selecionar os elementos dela.

// VALIDAÇÃO
const formulario2 = document.querySelector("#contato")
const texto = document.querySelector(".texto");

function pegarValue(event) {
    const target = event.target
    
    if(!event.target.checkValidity()){// Checa se o input corresponde ao requerid do form. (true or false)
        formulario2.nome.setCustomValidity("Esse campo é importante")
        target.classList.add("invalido")
        target.nextElementSibling.innerText = target.validationMessage
    } else{
        target.classList.remove("invalido")
    }
    document.body.style.backgroundColor = event.target.value
    texto.innerHTML = event.target.value

}

const dados = {};
function armazenarEmObjeto(event) {
    dados[event.target.name] = event.target.value
    console.log(dados);
}

formulario2.addEventListener("change", armazenarEmObjeto)
formulario2.addEventListener("change", pegarValue)
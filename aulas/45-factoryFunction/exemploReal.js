function $$(elementosSelecionados){
    const elementos = document.querySelectorAll(elementosSelecionados);

    function esconder() {
        elementos.forEach(element => {
            element.style.display = "none"
        })
        // Retornando a função para encadear com o método(pois sem isso iria retornar undefined)
        return this
    }

    function mostrar() {
        elementos.forEach(element => {
            element.style.display = "initial"
        })
        return this
    }

    function on(onEvent, callback){
        elementos.forEach(element => {
            element.addEventListener(onEvent, callback)
        })
        return this
    }
    
    function addClass(classe) {
        elementos.forEach(element => {
            element.classList.add(classe)
        })
        return this
    }

    function removeClass(classe) {
        elementos.forEach(element => {
            element.classList.remove(classe)
        })
        return this
    }

    return {
        elementosSelecionados,
        esconder,
        mostrar,
        elementos,
        on,
        addClass,
        removeClass,
    }
}

function handleClick(event) {
    console.log(event.target);
    btns.addClass("ativado")    
}

const btns = $$("button")
console.log(btns.on("click", handleClick));

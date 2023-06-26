const controles = document.getElementById("controles")
const cssText = document.querySelector(".css")
const btn = document.querySelector(".btn")

const handleStyle = {
    element: btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value
    },
    color(value){
        this.element.style.color = value
    },
    height(value){
        this.element.style.height = value + "px"
    },
    width(value){
        this.element.style.width = value + "px"
    },
    border(value){
        this.element.style.border = value
    },
    borderRadius(value){
        this.element.style.borderRadius = value + "px"
    },
    fontFamily(value){
        this.element.style.fontFamily = value
    },
    fontSize(value){
        this.element.style.fontSize = value + "px"
    },
    texto(value){
        this.element.innerText = value
    }
}

function pegarEstilos(event) {
    const nomeEvento = event.target.name;
    const valor = event.target.value;

    handleStyle[nomeEvento](valor)
    showCssStyle();
}

function showCssStyle(){
    cssText.innerHTML = "<span>" + btn.style.cssText.split("; ").join(";</span><span>")
}

controles.addEventListener("input", pegarEstilos)
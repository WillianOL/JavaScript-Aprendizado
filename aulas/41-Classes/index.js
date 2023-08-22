function Botao(texto, cor) {
    this.texto = texto;
    this.cor = cor;
}

Botao.prototype.elemento = function () {
    const elementoBotao = document.createElement("button");
    elementoBotao.classList.add("buttonComprar");
    elementoBotao.innerHTML = this.texto;
    elementoBotao.style.backgroundColor = this.cor;

    return elementoBotao;
};

const botaoAmarelo = new Botao("Comprar", "#ff3");

console.log(botaoAmarelo.elemento());

// As classes foram criadas para trazer uma sintaxe mais limpa para criar funções construtoras.
class Botao2 {
    // No constructor colocamos as propriedades do objeto
    constructor(texto, background) {
        this.texto = texto;
        this.background = background;
    }

    criarBotao() {
        const elementoBotao = document.createElement("button");
        elementoBotao.classList.add("newBotton");
        elementoBotao.innerHTML = this.texto;
        elementoBotao.style.backgroundColor = this.background;
        return elementoBotao;
    }
    // Acessar funções que retornam valores, e usar elas (this)
    colocarEm(local) {
        const localDoElemento = document.querySelector(local);
        localDoElemento.appendChild(this.criarBotao());
        return localDoElemento;
    }
}
// Os argumentos passados no "new" vão direto para o constructor
const novoBotao = new Botao2("Ver mais", "#70F");

console.log(novoBotao, novoBotao.criarBotao());
novoBotao.colocarEm("body")

class Card {
    constructor(card) {
        this.card = card;
    }

    criarCard() {
        const cardCriado = document.createElement("div");
        cardCriado.style.padding = this.card.padding + "px";
        cardCriado.style.color = this.card.color;
        cardCriado.style.borderRadius = this.card.borderRadius + "px";
        cardCriado.style.backgroundColor = this.card.background;
        cardCriado.innerText = this.card.texto;
        document.body.appendChild(cardCriado);
        return cardCriado;
    }

    colocarEm(target) {
        const localTarget = document.querySelector(target)
        localTarget.appendChild(this.criarCard())
    }
}
// Pode-se passar um objeto com as modificações por exemplo:
const cardVermelho = {
    background: "#F70",
    color: "white",
    texto: "Vou ser um programador no futuro",
    borderRadius: 5,
    padding: 20,
};

const colocarBotao = new Card(cardVermelho);

colocarBotao.colocarEm("body")

class Button3 {
    constructor(texto, background, width) {
        this.texto = texto;
        this.background = background;
        this.width = width;
    }

    criarBotao() {
        const elementoBotao = document.createElement("button");
        elementoBotao.classList.add("newBotton");
        elementoBotao.innerHTML = this.texto;
        elementoBotao.style.backgroundColor = this.background;
        elementoBotao.style.width = this.width + "px"
        return elementoBotao;
    }
    // Acessar funções que retornam valores, e usar elas (this)
    colocarEm(local) {
        const localDoElemento = document.querySelector(local);
        localDoElemento.appendChild(this.criarBotao());
        return localDoElemento;
    }

    static widthPadrao(texto) {
        return new Button3(texto, "blue", "200")
    }
}

const botaoPadrao = Button3.widthPadrao("Clique aqui")

botaoPadrao.colocarEm("body")
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

    colocarEm(local) {
        const localDoElemento = document.querySelector(local);
        localDoElemento.appendChild(this.criarBotao());
        return localDoElemento;
    }
}
// Os argumentos passados no "new" vão direto para o constructor
const novoBotao = new Botao2("Ver mais", "#70F");

console.log(novoBotao, novoBotao.criarBotao());

console.log(novoBotao.colocarEm("body"));

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
}

const cardVermelho = {
    background: "#F0F",
    color: "white",
    texto: "Vou ser um programador no futuro",
    borderRadius: 5,
    padding: 20,
};

const colocarBotao = new Card(cardVermelho);

console.log(colocarBotao.criarCard());


class Button2 {
    constructor(cor, background, font, content, padding) {
        this.cor = cor;
        this.background = background;
        this.font = font;
        this.content = content
        this.padding = padding
    }

    criarBotao() {
        const botao = document.createElement("button")
        botao.style.color = this.cor
        botao.style.backgroundColor = this.background
        botao.style.fontFamily = this.font
        botao.style.padding = this.padding + "px"
        botao.innerHTML = this.content
        return botao
    }
    // Acessar funções que retornam valores, e usar elas (this)
    colocarEm(target) {
        const elementTarget = document.querySelector(target)
        elementTarget.appendChild(this.criarBotao());
        return elementTarget
    }
}

const botaoCinza = new Button2("white", "#333", "monospace", "Clique aqui", 20)

botaoCinza.colocarEm("body")

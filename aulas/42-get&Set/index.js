// Get e Set
const botao = {
    // Get serve para acessarmos o valor do objeto "botao.elemento"
    get elemento() {
        // O "_" serve para dizermos que essa propriedade só vai estar dentro do objeto
        return this._elemento;
    },
    // O set serve para definirmos um valor ao objeto "botao.elemento = 'div' "
    set elemento(tipo) {
        return (this._elemento = document.createElement(tipo));
    },
};

botao.elemento = "ul";
console.log(botao.elemento);

// Os valores são estáticos
const botao2 = {
    get tamanho() {
        return 300;
    },
};

botao2.elemento = 400; // nada acontece
console.log(botao2.tamanho); // 300

const card = {
    get tamanho() {
        return this._tamanho || 200; // OU valor padrão
    },
    set tamanho(numero) {
        return (this._tamanho = numero * 20);
    },
};

// Com apenas o get os valores são estáticos
const matematica = {
    get angulo() {
        return 180;
    },
};

matematica.angulo = 360; // Nada acontece pois o valor é estático
console.log(matematica.angulo); // 180

// Com apenas o set pode-se mudar valores de propriedades no objeto
const listaDeNomes = {
    nomes: [],
    set pegarNomes(nome) {
        return this.nomes.push(nome);
    },
};
listaDeNomes.pegarNomes = "Willian";
listaDeNomes.pegarNomes = "Jessica";
console.log(listaDeNomes.nomes); // ["Willian", "Jessica"]

// Aplicando isso nas classes
class Botao {
    constructor(texto, cor) {
        this.texto = texto;
        this.cor = cor;
    }
    get elemento() {
        const tipo = this._tipoDoElemento || "button";
        const botao = document.createElement(tipo);
        botao.style.backgroundColor = this.cor;
        botao.innerText = this.texto;
        document.body.appendChild(botao);
        return botao;
    }
    set elemento(tipo) {
        return (this._tipoDoElemento = tipo);
    }
}

const botaoAzul = new Botao("CLIQUE AQUI", "#60F");
botaoAzul.elemento = "a";
botaoAzul.elemento;
// Porém, dessa forma o _tipoDoElemento não é privado.
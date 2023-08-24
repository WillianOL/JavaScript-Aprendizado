class Armario {
    constructor(portas) {
        this.portas = portas
    }
    abrirPorta() {
        return `As ${this.portas} portas se abriram`
    }
    fecharPortas() {
        return `As ${this.portas} portas se fecharam`
    }
}

// Dessa forma pode-se fazer uma classe herdar os métodos e propriedades de outra.
class ArmarioVerde extends Armario {
    abrirNovamente(){
        return `O armario verde de ${this.portas} portas abriu`
    }
    fecharPortas() {
        return `O armario verde de ${this.portas} portas fechou`
    }
}

const armarioCincoPortas = new Armario(3)
const outroArmario = new ArmarioVerde(5)
console.log(armarioCincoPortas.abrirPorta());
// O objeto outroArmario tem acesso aos métodos e propriedades do objeto armarioCincoPortas
console.log(outroArmario.abrirPorta());

// Os métodos podem se sobrescrever, mas não se sobrepoem. Os dois métodos ainda existem dentro das classes
console.log(outroArmario.fecharPortas())
console.log(armarioCincoPortas.fecharPortas())

class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar(){
        console.log("Acelerou")
    }
}
// A palavra chave "super" serve para chamarmos um método da classe herdada dentro da que vai herdar. É a mesma coisa que colocar "carro.acelerar()"
class Carro extends Veiculo {
    constructor(rodas, velocidade, carteira) {
        super(rodas)
        this.velocidade = velocidade
        this.carteira = carteira
    }
    acelerarMuito(){
        super.acelerar()
        console.log("Muito")
    }
}

const carro = new Carro(4, "120Km/h", true)
console.log(carro)
class Armario {
    constructor(portas) {
        this.portas = portas
    }
    abrirPorta() {
        return `As ${this.portas} portas se abriram`
    }
}

// Dessa forma pode-se fazer outra classe herdar os métodos e propriedades de outra.
class ArmarioVerde extends Armario {
    abrirNovamente(){
        return `O armario verde de ${this.portas} portas abriu`
    }
}

const armarioCincoPortas = new Armario(3)
const outroArmario = new ArmarioVerde(5)
export default class Contador {
    constructor(dataFutura) {
        this.dataFutura = dataFutura
    }
    get _dataAtual() {
        return new Date()
    }
    get _dataFutura() {
        return new Date(this.dataFutura)
    }
    get _DiferencaTempoAteNatal() {
        return this._dataFutura.getTime() - this._dataAtual.getTime()
    }
    get _dias() {
        return Math.floor(this._DiferencaTempoAteNatal / (24 * 60 * 60 * 1000))
    }
    get _horas() {
        return Math.floor(this._DiferencaTempoAteNatal / (60 * 60 * 1000))
    }
    get _minutos() {
        return Math.floor(this._DiferencaTempoAteNatal / (60 * 1000))
    }
    get _segundos() {
        return Math.floor(this._DiferencaTempoAteNatal / 1000)
    }
}

console.log("Teste");
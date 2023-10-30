export default class ValidarCpf {
    constructor(element) {
        this.element = element;
    }
    limpar(cpf) {
        return cpf.replace(/\D/g, "")
    }
    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
    }
    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf)
        return this.construir(cpfLimpo)
    }

    validar(cpf) {
        const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
        return (matchCpf && matchCpf[0] === cpf)
    }

    validarQuandoMudar(cpfElement) {
        if(this.validar(cpfElement.value)){
            cpfElement.value = this.formatar(cpfElement.value)
            cpfElement.classList.add("valido")
            cpfElement.classList.remove("erro")
            cpfElement.nextElementSibling.classList.remove("active")
        } else {
            cpfElement.classList.add("erro")
            cpfElement.classList.remove("valido")
            cpfElement.nextElementSibling.classList.add("active")
        }
    }

    adicionarErroSpan() {
        const spanErro = document.createElement("span")
        spanErro.classList.add("spanErro")
        spanErro.innerText = "CPF Inválido"
        // InsertBefore - adicionar depois
        // nextElementSibling - adicionar depois do elemento selecionado
        this.element.parentElement.insertBefore(spanErro, this.element.nextElementSibling)
    }

    adicionarEvento() {
        this.element.addEventListener("change", () => {
            this.validarQuandoMudar(this.element)
        })
    }

    iniciar() {
        this.adicionarErroSpan();
        this.adicionarEvento();
        return this
    }
}
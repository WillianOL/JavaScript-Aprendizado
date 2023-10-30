import ValidarCpf from "./validadorDeCpf.js";

const cpf = document.querySelector("#cpf")
const validarCpf = new ValidarCpf(cpf);

console.log(validarCpf.iniciar());
import Contador from "./contador.js";

const diasAteONatal = new Contador("24 December 2023 23:59:59 GMT-0300")
const diasAteOAniversario = new Contador("15 Octuber 2023 23:59:59 GMT-0300")

console.log(diasAteONatal.total);
console.log(diasAteOAniversario.total);

setInterval(() => {
    console.log(diasAteOAniversario.total);
}, 1000)
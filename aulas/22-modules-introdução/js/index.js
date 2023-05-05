import iniScrollSuave from "./modules/scrollSuave.js";
import initDescricao from "./modules/descricao.js";
import initInfo from "./modules/mostrarInfo.js";
import * as diversos from "./modules/exportacao.js";

// Quando o script está com o tipo de module(type="module"), ele entra no modo "use-strict". Ou seja, no modo estrito

iniScrollSuave();
initDescricao();
initInfo();
diversos.somar(50, 4);
diversos.multiplicarPor5(5)

console.log(diversos.string);
console.log(diversos.senha);
console.log(diversos.pessoa.nome);
console.log(diversos.cores);
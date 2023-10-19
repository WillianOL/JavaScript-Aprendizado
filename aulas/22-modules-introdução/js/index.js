import iniScrollSuave from "./modules/scrollSuave.js";
import initDescricao from "./modules/descricao.js";
import initInfo from "./modules/mostrarInfo.js";
import { somar, multiplicarPor5, string } from "./modules/exportacao.js"
import * as diversos from "./modules/exportacao.js";

// Quando o script está com o tipo de module(type="module"), ele entra no modo "use-strict". Ou seja, no modo estrito
// Sendo assim: Não pode criar vareáveis globais, não pode deletar o que não é deletável, não pode mudar propriedade que está congelada, não pode declarar palavras chaves.
iniScrollSuave();
initDescricao();
initInfo();
diversos.somar(50, 4);
diversos.multiplicarPor5(5)
// Com o destructuring
somar(10, 5)
multiplicarPor5(8)
console.log(string);

console.log(diversos.string);
console.log(diversos.senha);
console.log(diversos.pessoa.nome);
console.log(diversos.cores);
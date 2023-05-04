import iniScrollSuave from "./modules/scrollSuave.js";
import initDescricao from "./modules/descricao.js";
import initInfo from "./modules/mostrarInfo.js";
import * as diversos from "./modules/exportacao.js";

iniScrollSuave();
initDescricao();
initInfo();
diversos.somar(50, 4);
diversos.multiplicarPor5(5)

console.log(diversos.senha);
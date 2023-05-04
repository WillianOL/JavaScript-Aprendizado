import iniScrollSuave from "./modules/scrollSuave.js";
import initDescricao from "./modules/descricao.js";
import initInfo from "./modules/mostrarInfo.js";
import { somar, multiplicarPor5 } from "./modules/numbersOperation.js";
// O ideal é importar só uma coisa como padrão

iniScrollSuave();
initDescricao();
initInfo();
somar(50, 4);
multiplicarPor5(5)
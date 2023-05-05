import iniScrollSuave from "./modules/scrollSuave.js";
import initDescricao from "./modules/descricao.js";
import initInfo from "./modules/mostrarInfo.js";

// Quando o script está com o tipo de module(type="module"), ele entra no modo "use-strict". Ou seja, no modo estrito
// Sendo assim: Não pode criar vareáveis globais, não pode deletar o que não é deletável, não pode mudar propriedade que está congelada, não pode declarar palavras chaves.
iniScrollSuave();
initDescricao();
initInfo();
export default function initFuncionamento() {
    
}

const dataAgora = new Date();
const dataFuturo = new Date("Dec 24 2023 23:59")
// Sempre se baseia na informações da maquina(dispositivo) para pegar os dados.
dataAgora.getDay() // Pega o dia
dataAgora.getFullYear() // Ano completo EX: 2023
dataAgora.getHours() // Pega a hora
dataAgora.getMilliseconds() // Pega os milisegundos
dataAgora.getMinutes() // Pega os minutos
dataAgora.getMonth() // Pega o mês
dataAgora.getSeconds() // Pega os segundos

// Usar esse método para comparar datas
function trasnformaDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000)
}

const agora = trasnformaDias(dataAgora.getTime());
const futuro = trasnformaDias(dataFuturo.getTime());

console.log(Math.floor(futuro - agora));


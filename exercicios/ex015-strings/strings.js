// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes01 = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxaTotal = 0;
  let recebimentoTotal = 0;
  transacoes01.forEach((item) => {
    const numberLimpo = +item.valor.slice(2);
    if (item.descricao.includes('Taxa')){
        taxaTotal += numberLimpo;
    } else {
        recebimentoTotal += numberLimpo
    }
  })
  console.log(taxaTotal);
  console.log(recebimentoTotal);

  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  console.log(transportes.split(';')); 
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  const removerSpan = html.split('span').join('a')
  console.log(removerSpan);

  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';

  console.log(frase.slice(-1));
  
  // Retorne o total de taxas
  const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

  let totalTaxas = 0;
  transacoes.forEach((item) => {
    item = item.toLowerCase().trim()
    if(item.includes("taxa")){
        totalTaxas++
    }
  })

  console.log(totalTaxas);
  
  
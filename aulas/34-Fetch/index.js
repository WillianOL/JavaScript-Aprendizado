//Com a fetch podemos fazer requisições HTTP, e o que é retornado pra ela é uma PROMISE
const documento = fetch('./documento.txt'); // Caminho do arquivo
const conteudo = document.querySelector('.content');

documento
  .then((resultado) => {
    console.log(resultado);
    return resultado.text()
  }) // O método text() retorna o valor dela em formato de texto.
  .then((texto) => {
    console.log(texto);
    conteudo.innerHTML = texto;
  });

console.log(documento);

// API do banco de dados dos CEPS do Brasil
// JSON é um tipo de formato de dados com JS. Possui a mesma sintax de um objeto JS
fetch('https://viacep.com.br/ws/57690000/json/')
  .then((resultado) => resultado.json())
  .then((cep) => {
    conteudo.innerHTML = cep.localidade;
  });

// Implementando um CSS na div
fetch('./style.css')
  .then((resultado) => resultado.text())
  .then((css) => {
    const style = document.createElement('style');
    style.innerHTML = css;
    conteudo.appendChild(style);
  });

// Pegando o texto de um HTML
const div = document.createElement('div');

fetch('./login.html')
  .then((resultado) => resultado.text())
  .then((texto) => {
    div.innerHTML = texto;
    const titulo = div.querySelector('h1').innerText;
    const paragrafo = div.querySelector('p').innerText;
    conteudo.innerHTML += `<br> ${titulo} <br> ${paragrafo}`;
  });

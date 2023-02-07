// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a');
menuItens.forEach((index) => {
    index.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item) => {
    item.classList.remove('ativo')
})

menuItens[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')
imagens.forEach((itens) => {
    const possuiAlt = itens.hasAttribute('alt')
    console.log(itens, possuiAlt);
})

// Modifique o href do link externo no menu
const menu = document.querySelector('a[href^="https://"]')
menu.setAttribute('href', 'link-alterado')
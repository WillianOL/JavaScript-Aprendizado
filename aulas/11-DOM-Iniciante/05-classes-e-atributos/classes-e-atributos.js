const menu = document.querySelector('.menu');

menu.classList.add('ativo'); // Adicionar a classe 'ativo' ao elemento
menu.classList.add('ativo', 'mobile'); // adiciona duas classes
menu.classList.remove('ativo'); // Remove a classe 'ativo' do elemento
menu.classList.toggle('ativo') // Adiconar de não ouver, remove se ouver
menu.classList.contains('ativo'); // Verificar se o elemento possui a classe. true or false
menu.classList.replace('ativo', 'inativo') // Substituir a classe

menu.classList.replace('inativo', 'ativo');
if(menu.classList.contains('ativo')) {
    menu.classList.add('contem-ativo')
} else{
    menu.classList.add('nao-contem-ativo');
}

menu.className += ' ativado' // Adicionando diretamente usando concatenação.

const animais = document.querySelector('.animais')
console.log(animais.attributes[1]);
// forEach usado em relação a lista de itens do html. Repetições
const imgNode = document.querySelectorAll('img');
imgNode.forEach(function(item, index, lista){
    console.log(item);
});

// Tranformando uma HtmlCollection em array
const imgHtml = document.getElementsByClassName('grid-section');
const imgHtmlArray = Array.from(imgHtml)
imgHtmlArray.forEach(function(item){
    console.log(item);
});

let contador = 0;
imgNode.forEach(() => {
    console.log(contador++);
});



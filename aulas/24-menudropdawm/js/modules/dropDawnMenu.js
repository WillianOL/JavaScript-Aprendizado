export default function initDropDawnMenu() {}

const allDropMenus = document.querySelectorAll("[data-dropDawn]");

allDropMenus.forEach((menu) => {
    // Forma de adicionar varios eventos a uma função
    ["click", "touchstart"].forEach((startEvent) => {
        menu.addEventListener(startEvent, handleClick);
    });
});

function handleClick(event) {
    event.preventDefault();
    console.log(this);
    this.classList.toggle("ativo")
    clickOutSide()
}

function clickOutSide() {
    const html = document.documentElement;
    html.addEventListener("click", handleOutSideClick)

    function handleOutSideClick(event) {
        console.log(event);
    }
}
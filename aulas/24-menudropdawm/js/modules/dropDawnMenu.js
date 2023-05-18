export default function initDropDawnMenu() {}

const allDropMenus = document.querySelectorAll("[data-dropDawn]");

allDropMenus.forEach((menu) => {
    // Forma de adicionar varios eventos a uma função
    ["click", "touchstart", "mouseover"].forEach((startEvent) => {
        menu.addEventListener(startEvent, dropDawnMenu);
    });
});

function dropDawnMenu(event) {
    event.preventDefault();
}

import clickOutSide from "./outSideClick.js";

export default function initDropDawnMenu() {
    const allDropMenus = document.querySelectorAll("[data-dropDawn]");
    allDropMenus.forEach((menu) => {
        // Forma de adicionar varios eventos a uma função
        ["click", "touchstart"].forEach((startEvent) => {
            menu.addEventListener(startEvent, handleClick);
        });
    });
    function handleClick(event) {
        event.preventDefault();
        this.classList.add("ativo")
        clickOutSide(this, () => {
            this.classList.remove("ativo")
        } )
    }
}


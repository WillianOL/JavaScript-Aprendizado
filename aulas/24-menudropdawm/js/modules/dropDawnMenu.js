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

    function clickOutSide(element, callback) {
        const html = document.documentElement;
        html.addEventListener("click", handleOutSideClick)
        function handleOutSideClick(event) {
            if(!element.contains(event.target)){
                html.removeEventListener("click", handleOutSideClick)
                callback();
            }
        }
    }
}


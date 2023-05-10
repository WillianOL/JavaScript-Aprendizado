export default function initTooltip() {}

const allTooltips = document.querySelectorAll("[data-tooltip]");

allTooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {
    criarTooltipBox(this);
}

function criarTooltipBox(elemento) {
    const tolltipBox = document.createElement("div");
    const text = elemento.getAttribute("aria-label");
    tolltipBox.classList.add("tooltip");
    tolltipBox.innerText = text;
    return tolltipBox;
}

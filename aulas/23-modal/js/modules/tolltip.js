export default function initTooltip() {}

const todasAsTooltips = document.querySelectorAll("[data-tooltip]");

todasAsTooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver)
});

function onMouseOver(event) {
    console.log(event);
}
export default function initTooltip() {}

const todasAsTooltips = document.querySelectorAll("[data-tooltip]");

todasAsTooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver)
});

function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + "px";
    tooltipBox.style.left = event.pageX + "px";

    this.addEventListener("mouseleave", onMouseLeave)
}

function onMouseLeave() {
    tooltipBox.remove();
}

function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltipBox")
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
}
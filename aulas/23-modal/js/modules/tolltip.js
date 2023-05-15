export default function initTooltip() {
    const todasAsTooltips = document.querySelectorAll("[data-tooltip]");

    todasAsTooltips.forEach((item) => {
        item.addEventListener("mouseover", onMouseOver)
    });

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this);
        tooltipBox.style.top = event.pageY + "px";
        tooltipBox.style.left = event.pageX + "px";

        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;

        this.addEventListener("mouseleave", onMouseLeave)
    }

    const onMouseLeave = {
        tooltipBox: "",
        element: "",
        handleEvent(){
            this.tooltipBox.remove();
            this.element.removeEventListener("mouseleave", onMouseLeave)
        }
        
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement("div");
        const text = element.getAttribute("aria-label");
        tooltipBox.classList.add("tooltipBox")
        tooltipBox.innerText = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}


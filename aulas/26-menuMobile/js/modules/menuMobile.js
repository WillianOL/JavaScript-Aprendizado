import clickOutSide from "./outSideClick.js";

export default function initMenuMObile() {

}

const menuBotton = document.querySelector("[data-menu='button']")
const menuList = document.querySelector("[data-menu='list']")

function openMenu(event) {
    menuBotton.classList.add("ativo")
    menuList.classList.add("ativo")
    clickOutSide(menuList, ["click", "touchstart"], () => {
        menuBotton.classList.remove("ativo")
        menuList.classList.remove("ativo")
    })
}

menuBotton.addEventListener("click", openMenu)
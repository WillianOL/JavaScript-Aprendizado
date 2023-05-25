export default function clickOutSide(element, callback) {
    const html = document.documentElement;
    html.addEventListener("click", handleOutSideClick)
    
    function handleOutSideClick(event) {
        if(!element.contains(event.target)){
            html.removeEventListener("click", handleOutSideClick)
            callback();
        }
    }
}
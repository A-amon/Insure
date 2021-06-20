
function handleMenu(event) {
    let headerButton = event.target
    let isOpen = event.target.getAttribute("data-open").toLowerCase() === "true"
    if (isOpen)
        headerButton.setAttribute("data-open", !isOpen)  //prompt to close menu if opened
    else
        headerButton.setAttribute("data-open", !isOpen)   //prompt to open menu if closed
}

let headerButton = document.getElementsByClassName("header__button")[0]
headerButton.addEventListener("click", handleMenu)
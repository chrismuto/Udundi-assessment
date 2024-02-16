const openButton = document.getElementById("openModalButton")
const closeButton = document.getElementById("closeModalButton")
const header = document.getElementById("header")
var modal = document.getElementById("modal")

function openModal() {
    modal.classList.remove("scale-0")
    modal.classList.add("scale-1")
    header.style.display = "none"
    button.style.display = "none"
}

function closeModal() {
    modal.classList.add("scale-0")
    modal.classList.remove("scale-1")
    header.style.display = "block"
    button.style.display = "block"
}

openButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)
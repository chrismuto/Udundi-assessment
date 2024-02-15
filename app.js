const openButton = document.getElementById("openModalButton")
const closeButton = document.getElementById("closeModalButton")
const header = document.getElementById("header")
var modal = document.getElementById("modal")

function openModal() {
    modal.style.display = "block"
    header.style.display = "none"
    button.style.display = "none"
}

function closeModal() {
    modal.style.display = "none"
    header.style.display = "block"
    button.style.display = "block"
}

openButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)
const openButton = document.getElementById("openModalButton")
const closeButton = document.getElementById("closeModalButton")
const header = document.getElementById("header")
var modal = document.getElementById("modal")

function openModal() {
    modal.classList.remove("scale-0")
    modal.classList.add("scale-1")
    openButton.style.display = "none"
    header.style.display = "none"
    openButton.style.display = "none"
}

function closeModal() {
    modal.classList.remove("scale-1")
    modal.classList.add("scale-0")
    header.style.display = "block"
    openButton.style.display = "flex"
}

openButton.addEventListener("click", openModal)
closeButton.addEventListener("click", closeModal)
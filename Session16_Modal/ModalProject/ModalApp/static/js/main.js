const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".open-button");

const closeBtn = modal.querySelector(".close");
const overlay = modal.querySelector(".modal-overlay");

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

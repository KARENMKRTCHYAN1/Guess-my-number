document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("menu");
  const overlay = document.querySelector(".overlay");

  const contactModal = document.getElementById("contactModal");
  const contactOverlay = document.querySelector(".contactOverlay");

  function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  function openContactModal() {
    contactModal.style.display = "block";
    contactOverlay.style.display = "block";
  }

  function closeContactModal() {
    contactModal.style.display = "none";
    contactOverlay.style.display = "none";
  }

  function handleButtonClick(event) {
    if (event.target.classList.contains("homeMenu")) {
      openModal();
    } else if (event.target.classList.contains("homeconcat")) {
      openContactModal();
    }
  }

  function handleOverlayClick(event) {
    if (event.target === overlay) {
      closeModal();
    } else if (event.target === contactOverlay) {
      closeContactModal();
    }
  }

  function handleCloseButtonClick(event) {
    if (event.target.classList.contains("display")) {
      closeModal();
      closeContactModal();
    }
  }

  document.addEventListener("click", handleButtonClick);
  overlay.addEventListener("click", handleOverlayClick);
  contactOverlay.addEventListener("click", handleOverlayClick);
  modal
    .querySelector(".display")
    .addEventListener("click", handleCloseButtonClick);
  contactModal
    .querySelector(".display")
    .addEventListener("click", handleCloseButtonClick);
});

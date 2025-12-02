document.addEventListener("DOMContentLoaded", () => {
  const btnReload = document.getElementById("btnReloadTokens");
  const popup = document.getElementById("tokenPopup");
  const closePopup = document.getElementById("closePopup");
  const offerButtons = document.querySelectorAll(".btnOffer");

  btnReload.addEventListener("click", () => {
    popup.classList.remove("hidden");
    setTimeout(() => {
      popup.classList.add("opacity-100");
      popup.querySelector("div").classList.add("scale-100");
    }, 10);
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("opacity-100");
    popup.querySelector("div").classList.remove("scale-100");
    setTimeout(() => popup.classList.add("hidden"), 300);
  });

  offerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tokens = btn.getAttribute("data-tokens");
      popup.classList.remove("opacity-100");
      popup.querySelector("div").classList.remove("scale-100");
      setTimeout(() => popup.classList.add("hidden"), 300);
      window.location.href = `crypto.html?tokens=${tokens}`;
    });
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("opacity-100");
      popup.querySelector("div").classList.remove("scale-100");
      setTimeout(() => popup.classList.add("hidden"), 300);
    }
  });
});


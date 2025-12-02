// tokenPopup.js

// Crée le popup HTML
const popupHTML = `
<div id="tokenPopup" class="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50 hidden transition-opacity duration-300 opacity-0">
  <div class="bg-[#111] border-2 border-[#23D200] rounded-2xl p-8 w-96 max-w-[90vw] relative shadow-lg transform scale-90 transition-transform duration-300">
    <button id="closePopup" class="absolute top-3 right-3 text-[#23D200] font-bold text-xl hover:text-white transition-colors">✖</button>
    <h2 class="text-3xl font-extrabold text-[#23D200] mb-4 text-center">Recharger vos Tokens</h2>
    <p class="text-gray-400 mb-6 text-center">Choisissez une offre et cliquez sur Acheter pour obtenir plus de tokens.</p>
    <div class="flex flex-col gap-4">

      <button class="btnOffer py-3 font-bold text-lg rounded-lg transition-all duration-300 bg-[#000] border-2 border-[#23D200] hover:bg-[#111] hover:border-[#1ed760] hover:text-[#23D200]" data-tokens="100">
        100 Tokens - 1,99€
      </button>

      <div class="relative">
        <button class="btnOffer py-3 font-bold text-lg rounded-lg transition-all duration-300 w-full bg-[#000] border-2 border-[#23D200] hover:bg-[#111] hover:border-[#1ed760] hover:text-[#23D200]" data-tokens="250">
          250 Tokens - 4,99€
        </button>
        <!-- Petit bandeau “populaire” -->
        <span class="absolute top-0 right-0 bg-[#23D200] text-black text-xs font-bold px-2 py-1 rounded-bl-lg translate-y-[-0.3rem] translate-x-[0.3rem]">
          Populaire
        </span>
      </div>

      <button class="btnOffer py-3 font-bold text-lg rounded-lg transition-all duration-300 bg-[#000] border-2 border-[#23D200] hover:bg-[#111] hover:border-[#1ed760] hover:text-[#23D200]" data-tokens="500">
        500 Tokens - 10,99€
      </button>

    </div>
  </div>
</div>
`;

// Injecte le popup dans le body
document.body.insertAdjacentHTML('beforeend', popupHTML);

// Récupère les éléments
const btnReload = document.getElementById("btnReloadTokens");
const popup = document.getElementById("tokenPopup");
const closePopup = document.getElementById("closePopup");
const offerButtons = document.querySelectorAll(".btnOffer");

// Fonction pour ouvrir le popup avec animation
function openPopup() {
  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.add("opacity-100");
    popup.querySelector("div").classList.add("scale-100");
  }, 10);
}

// Fonction pour fermer le popup avec animation
function closePopupFunc() {
  popup.classList.remove("opacity-100");
  popup.querySelector("div").classList.remove("scale-100");
  setTimeout(() => popup.classList.add("hidden"), 300);
}

// Ouvre le popup
btnReload.addEventListener("click", openPopup);

// Ferme le popup
closePopup.addEventListener("click", closePopupFunc);

// Redirection vers crypto.html avec tokens
offerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const tokens = btn.getAttribute("data-tokens");
    closePopupFunc();
    // Redirige vers crypto.html avec query string pour nombre de tokens
    window.location.href = `crypto.html?tokens=${tokens}`;
  });
});

// Ferme popup en cliquant en dehors
popup.addEventListener("click", (e) => {
  if (e.target === popup) closePopupFunc();
});

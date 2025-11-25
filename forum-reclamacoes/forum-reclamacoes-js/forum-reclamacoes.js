const modal = document.getElementById("modal");
const abreBtn = document.getElementById("abreModal");
const fechaBtn = document.getElementById("fechaModal");

abreBtn.addEventListener("click", () => {
  modal.classList.remove("someModal");
});

fechaBtn.addEventListener("click", () => {
  modal.classList.add("someModal");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("someModal");
  }
});

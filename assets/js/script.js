document.addEventListener("DOMContentLoaded", () => {
  const navBack = document.querySelector(".gl-nav-back");
  if (navBack) {
    navBack.addEventListener("click", (e) => e.preventDefault());
  }
});

document.querySelector("h1").addEventListener("click", () => {
  document.querySelector("h1").classList.add("color");
  setTimeout(() => {
    document.querySelector("h1").classList.remove("color");
  }, 2000);
});

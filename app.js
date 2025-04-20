const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function mostrarConteudo(id) {
  const secoes = document.querySelectorAll(".conteudo");
  secoes.forEach(secao => {
    secao.style.display = "none";
  });

  const selecionado = document.getElementById(id);
  if (selecionado) {
    selecionado.style.display = "block";
  }
}

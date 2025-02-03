let imagens = document.querySelectorAll(".troca-imagem");
let indexAtual = 0;

function trocaImagem() {
  imagens[indexAtual].classList.add("hidden");

  indexAtual = (indexAtual + 1) % imagens.length;

  imagens[indexAtual].classList.remove("hidden");
}

setInterval(trocaImagem, 2000);






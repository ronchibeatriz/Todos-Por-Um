let indiceAtual = 0;

  const faixa = document.getElementById("faixa");
  const mostrarporvez = 3;

function atualizarCarrossel() {
            
  const larguravideo = faixa.children[0].clientWidth;
  faixa.style.transform = `translateX(${-indiceAtual * larguravideo}px)`;
} 

function mudarvideo(direcao) { 
  const totalvideos = faixa.children.length;
  const limite = totalvideos - mostrarporvez;

  indiceAtual += direcao;
          
  if (indiceAtual < 0) {
    indiceAtual = limite;} 
  else if (indiceAtual > limite) {
    indiceAtual = 0;
  }
  
  atualizarCarrossel();
}
window.addEventListener("resize", atualizarCarrossel);

const playButtons = document.querySelectorAll('.play');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const botoes = button.parentElement; 
    const video = botoes.querySelector('video');
    video.play();
    button.style.display = 'none'; 
  });
  
});

const playButtons2 = document.querySelectorAll('.play2');

playButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const botoes = button.parentElement; 
    const video = botoes.querySelector('video');
    video.play();
    button.style.display = 'none'; 
  });
  });
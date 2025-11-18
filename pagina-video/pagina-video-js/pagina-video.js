const playButtons = document.querySelectorAll('.play');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const botoes = button.parentElement; 
    const video = botoes.querySelector('video');
    video.play();
    button.style.display = 'none'; 
  });
  
});
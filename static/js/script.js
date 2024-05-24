 function darkmode() {
    // Obtém a referência do html
    const html = document.documentElement;

    // Alterna a classe dark-mode no html
    html.classList.toggle('dark-mode');

    // Obtém a referência da imagem
    const image = document.getElementById('minha_foto');
    const btn = document.getElementById('btn_dark')
    // Verifica se está no dark mode
    if (html.classList.contains('dark-mode')) {
      // Altera o src da imagem para a versão dark mode
      image.src = 'static/imgs/darkmode.jpg';
      btn.classList.remove('fa-moon')
      btn.classList.add('fa-sun');
      
    } else {
      // Altera o src da imagem para a versão light mode
      image.src = 'static/imgs/eunaoseiprogramar.png';
      btn.classList.remove('fa-sun')
      btn.classList.add('fa-moon');
    }
}
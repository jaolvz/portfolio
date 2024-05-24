 function darkmode() {
  
    const html = document.documentElement;

    // alterna o dark-mode
    html.classList.toggle('dark-mode');


    const image = document.getElementById('minha_foto');
    const btn = document.getElementById('btn_dark')

    if (html.classList.contains('dark-mode')) {

      image.src = 'static/imgs/darkmode.jpg';
      btn.classList.remove('fa-moon')
      btn.classList.add('fa-sun'); 
    }
     else {
      image.src = 'static/imgs/eunaoseiprogramar.png';
      btn.classList.remove('fa-sun')
      btn.classList.add('fa-moon');
    }
}
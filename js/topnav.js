function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  function adjustFontSize() {
    const button = document.querySelector('.pf-button');
    const buttonText = document.getElementById('button-text');

    let fontSize = 16; // Tamanho de fonte inicial (pode ser ajustado)
    const padding = 10; // Espaçamento interno para evitar que o texto toque nas bordas

    while (buttonText.scrollWidth > button.offsetWidth - 2 * padding) {
        fontSize--;
        buttonText.style.fontSize = fontSize + 'px';
    }
}

adjustFontSize();
window.addEventListener('resize', adjustFontSize);
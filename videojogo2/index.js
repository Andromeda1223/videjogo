window.onload = () => {
    const button = document.querySelector('#start-button');
    const canvas = document.querySelector('#myCanvas');
    const portada = document.querySelector('#portada');

    button.onclick = () => {
        portada.style.display = "none";
        canvas.style.display = "block";
        Game.init();
    }
}
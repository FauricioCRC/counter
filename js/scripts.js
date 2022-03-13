const counter = document.getElementById('counter');
const counterButton = document.getElementById('button');
let numero = 0;
const sonido = new Audio();
sonido.src = '../assets/audio/listo.mp3'

counterButton.addEventListener('click', (e) => {
    if (numero < 15){
        if(e.target.className === 'button' || e.target.parentNode.className === 'button')
        counter.textContent = `#${++numero}`
        if(numero === 15){
            sonido.play();
            counter.classList.add('counter-finished');
            document.body.classList.add('body-counter-finished');
        }
    }
})
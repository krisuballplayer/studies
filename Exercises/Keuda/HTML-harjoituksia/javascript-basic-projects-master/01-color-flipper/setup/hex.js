const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //array (taulukko) jossa 16 arvoa joita käytetään HEX-väreissä
const btn = document.getElementById('btn'); //kutsutaan nappia jonka ID on 'btn'
const color = document.querySelector('.color'); //kutsutaan span jonka luokka on .color

btn.addEventListener('click', function() { //lisätään napille "tapahtumakuuntelijan"
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]; //noutaa kuusi arvoa taulukosta hex 
    }
    color.textContent = hexColor; //kirjoittaa hexColorin arvon spanille jonka luokka on .color
    document.body.style.backgroundColor = hexColor; //vaihtaa bodyn taustaväriä hexcolorin arvon mukaan
}) 

function getRandomNumber () {
    return Math.floor(Math.random() * hex.length)
}

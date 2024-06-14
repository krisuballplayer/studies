/*Miksi en voi määritellä mjono-muuttujaa globaalisti? 
esim. näin let = mjono = document.getElementById("naytto").value;*/  

let mjono;

function laske(merkki) {
    mjono = document.getElementById("naytto");  
    mjono.value +=merkki;
}

function vastaus() {
    mjono = document.getElementById("naytto"); 
    mjono.value = eval(mjono.value);
}

function tyhjenna() {
    mjono = document.getElementById("naytto");
    mjono.value = ""

}

function deletoi() {
    mjono = document.getElementById("naytto");
    mjono.value = mjono.value.slice(0, -1);

}
let arvottu = Math.floor(Math.random()*10) + 1;
let kierros = 3 ;
let arvatut = [];
let plussa = 0;
let miinus = 0;

function tarkasta() {
    let arvaus = parseInt(document.getElementById("luku").value);

    if(arvaus < 1 || arvaus > 10) {
        alert("Ei menny ihan, niin kun Strömöössä nyt! Yritäppäs uurelleen!");       
    } 
    else {
        if (arvaus == arvottu) {
            vastaus.innerHTML= "Hyvä sinä!";
            document.getElementById("tarkasta").disabled = true;       
            plussa++;  
            sessionStorage.setItem("plussa", plussa);    
            sessionStorage.setItem("miinus", miinus);
            tulostaulu.innerHTML = "Voitot: " + sessionStorage.getItem("plussa", plussa) + "<br>" + "Häviöt:  " + sessionStorage.getItem("miinus", miinus);  
                lisaa();            
        }
        else if (arvaus > arvottu) {
            vastaus.innerHTML="Luku on pienempi!"
                lisaa();
        } else {
            vastaus.innerHTML="Luku on suurempi!"
                lisaa();
        }
            
    }
         
    function lisaa()  {
        arvatut.push(arvaus);
        lista.innerHTML = "Arvatut numerot: " + arvatut;
        kierros--;        
        kierrokset.innerHTML = "Kierroksia jäljellä: " + kierros;
            if(arvatut.length == 3 && arvaus != arvottu) {
                vastaus.innerHTML="Kierrokset loppu kesken!" + "<br>" + "Luku oli: " + arvottu;
                document.getElementById("tarkasta").disabled = true;
                miinus++;
                sessionStorage.setItem("miinus", miinus);  
                sessionStorage.setItem("plussa", plussa);
                tulostaulu.innerHTML = "Voitot: " + sessionStorage.getItem("plussa", plussa) + "<br>" + "Häviöt: " + sessionStorage.getItem("miinus", miinus);  
            }
    }
}    

    


function clean() {

    arvatut = []
    lista.innerHTML = "Arvatut numerot: ei yhtään";
    kierros= 3;
    kierrokset.innerHTML = "Kierroksia jäljellä: 3"; 
    vastaus.innerHTML=""; 
    arvottu = Math.floor(Math.random()*10) + 1;
    document.getElementById("tarkasta").disabled =false; 
    let x = document.getElementById("lomake");
    x.reset();    
}

















     




    


    
function jarjesta() {  
    let x = parseInt(document.getElementById("luku1").value);
    let y = parseInt(document.getElementById("luku2").value);
    let z = parseInt(document.getElementById("luku3").value);
    let text1 = "Annoit luvut: "; 
    let text2 = "Järjestyksessä pienimmästä suurempaan ne ovat: ";  


    document.getElementById("vastaus1").innerHTML = text1 + x + ', ' + y + ', ' +z;
    
    if (x < y && x < z)  {
        if(y < z)
        {
           document.getElementById("vastaus2").innerHTML = text2 + x + ', ' + y + ', ' +z;
        }
        else {
           document.getElementById("vastaus2").innerHTML = text2 + x + ', ' + z + ', ' +y;
        }
    } 

    else if (y < x && y < z)  {
        if(x < z)
        {
            document.getElementById("vastaus2").innerHTML = text2 + y + ', ' + x + ', ' +z;
        }
        else {
            document.getElementById("vastaus2").innerHTML = text2 + y + ', ' + z + ', ' +x;
        }
    }

    else if (z < x && z < y)  {
      if(x < y)
      {
        document.getElementById("vastaus2").innerHTML = text2 + z + ', ' + x + ', ' +y;
      }
      else {
        document.getElementById("vastaus2").innerHTML = text2 + z + ', ' + y + ', ' +x;
      }
    }
}

function etsisuurin() {  
  let a = parseInt(document.getElementById("luku4").value);
  let b = parseInt(document.getElementById("luku5").value);
  let c = parseInt(document.getElementById("luku6").value);
  let d = parseInt(document.getElementById("luku7").value);
  let e = parseInt(document.getElementById("luku8").value);

  const oneArray = [a, b, c, d, e];  
  let suurin = 0;

  for (i=0; i < oneArray.length; i++) {

    if (suurin >= oneArray[i]) {      
    }
    else {
        suurin = oneArray[i];
    }    

  }

  document.getElementById("vastaus3").innerHTML = "Suurin luku on: " + suurin;
  
}

function parittaja() {
  let numero = parseInt(document.getElementById("luku9").value);

  let tarkistus = 0;

  if (tarkistus == numero%2 ) {
    document.getElementById("vastaus4").innerHTML = "Luku on parillinen!";
  }
  else {
    document.getElementById("vastaus4").innerHTML = "Luku on pariton!";
  }   

}

function tarkistaja() {
  let ikä = parseInt(document.getElementById("luku10").value);

  if (ikä < 15) {
    document.getElementById("vastaus5").innerHTML = "Polkypyörä on sinulle hyvä!";
  }
  else if (ikä < 18) {
    document.getElementById("vastaus5").innerHTML = "Voit päristellä mopolla!";
  }
  else {
    document.getElementById("vastaus5").innerHTML = "Saat ajaa autoa!";
  }

  }

  function kaantaja() {
    let valinta = document.getElementById("kieli").value;
    
    switch (valinta) {
      case "Englanti":
        document.getElementById("vastaus6").innerHTML = "Hello World!";
        break;
      case "Ruotsi":
        document.getElementById("vastaus6").innerHTML = "Hej Världen!";
        break;
      case "Espanja":
        document.getElementById("vastaus6").innerHTML = "Hola Mundo!";
      
    }
  
    
  
    }



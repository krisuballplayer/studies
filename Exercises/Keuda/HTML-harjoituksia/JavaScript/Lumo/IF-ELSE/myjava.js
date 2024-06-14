function  vertaa() {  

    let x = parseInt(document.getElementById("luku1").value);
    let y = parseInt(document.getElementById("luku2").value);

    if (x > y) {
      document.getElementById("vastaus1").innerHTML = x + " On suurempi kun " + y;
    }
    else if (y > x) {  
      document.getElementById("vastaus1").innerHTML = y + " On suurempi kun " + x;
    }      
    else{ 
      document.getElementById("vastaus1").innerHTML = "Luvut ovat yhtä suuria!";
    }
} 

function vertaa2() {

  let x = parseInt(document.getElementById("luku3").value);
  let y = parseInt(document.getElementById("luku4").value);
  let z = parseInt(document.getElementById("luku5").value);
  
    if (x > y && x > z) {      
      document.getElementById("vastaus2").innerHTML = x + " on suurin!";
    }
    else if (y > z) {
      document.getElementById("vastaus2").innerHTML = y + " on suurin!";
    }
    else {
      document.getElementById("vastaus2").innerHTML = z + " on suurin!";
    }
  }

function selvita() {

  let numero = parseInt(document.getElementById("luku6").value);
  
  if (numero > 0) {      
    document.getElementById("vastaus3").innerHTML = "Numero on positiivinen!";
  }
  else if (numero < 0) {
    document.getElementById("vastaus3").innerHTML = "Numero on negatiivinen!";
  }
  else {
    document.getElementById("vastaus3").innerHTML = "Numero on nolla!";
  }
}

function jaollinen() {  

  let x = parseInt(document.getElementById("luku7").value);
  let nro1 = 5;
  let nro2 = 11;

  if (x % nro1 == 0 && x % nro2 == 0) {      
    document.getElementById("vastaus4").innerHTML = "Numero on jaollinen molempien kanssa!";
  }
  else if (x % nro1 == 0) {
    document.getElementById("vastaus4").innerHTML = "Numero on jaollinen viidellä!";
  }
  else if (x % nro2 == 0) {
    document.getElementById("vastaus4").innerHTML = "Numero on jaollinen yhdelätoista!";
  }
  else {
    document.getElementById("vastaus4").innerHTML = "Numero ei ole jaollinen kumankaan kanssa!!";
  }
} 

function karkaako() {
  
  let jäännös = document.getElementById("vuosi").value;
  let text ="";

  if (jäännös % 4 == 0 && jäännös % 100 !=0) {
    text = "Vuosi on karkausvuosi!";
  } 
  else if (jäännös % 400 == 0) {
    text = "Vuosi on karkausvuosi!"
  }
  else {
    text ="Vuosi ei ole karkausvuosi!"
  }
  document.getElementById("vastaus5").innerHTML = text;
}

function parita() {  

  let x = parseInt(document.getElementById("luku8").value);
 
  if (x % 2 !=0) {
    document.getElementById("vastaus6").innerHTML = "Syöttämäsi luku on pariton!";
  }
  else { 
    document.getElementById("vastaus6").innerHTML = "Syöttämäsi luku on parillinen!"; 
  }            
}      

function check() { 
  //Only the english alphabet
  let x = document.getElementById("char").value;
  let y = /\W/;
  let z = /[0-9]/;

    if (x.match(y) == true) {
      document.getElementById("vastaus7").innerHTML = "Se on erikoismerkki!";
    }
    else if (x.match(z) == true) {
      document.getElementById("vastaus7").innerHTML = "Se on numero!";
    }
    else {
      document.getElementById("vastaus7").innerHTML = "Se on kirjain!";
    }
}
  
    


function listaa() {
  let kymmenen = "";
  let lista = 0;
  
    for(i = 1; i <=10; i++)
    {
      kymmenen += i + " ";
      lista = kymmenen;
    }
  
  document.getElementById("vastaus6").innerHTML = lista;
}

function yhteenlasku() {
  let kymmenen = 0;
  let lista = 0;
  
    for(i = 1; i <=10; i++)
    {
      kymmenen += i;
      lista = kymmenen;
    }
  
  document.getElementById("vastaus7").innerHTML = lista;
}

function kaava() {
  let x = parseInt(document.getElementById("kLuku").value);
  let y = parseInt(document.getElementById("potenssi").value);
  let summa = 1;
  
    for(i = 1; i <= y; i++)
    {
      summa *= x;  
    }
  
  document.getElementById("vastaus8").innerHTML = summa;
}

function piensuur() {

  //let a = parseInt(document.getElementById("nr1","nro2","nro3","nro4","nro5").value);
  let a = parseInt(document.getElementById("nro1").value);
  let b = parseInt(document.getElementById("nro2").value);
  let c = parseInt(document.getElementById("nro3").value);
  let d = parseInt(document.getElementById("nro4").value);
  let e = parseInt(document.getElementById("nro5").value);
  

  //let numeroita = [a]; 
  let numeroita = [a,b,c,d,e]; 
  let pienin = numeroita[0];
  let suurin = numeroita[0];

  for (i = 1; i < numeroita.length; i++) {
    
    if (numeroita[i] > suurin) {
      suurin = numeroita[i];
    }
    else if (numeroita[i] < pienin) {
      pienin = numeroita[i];
    }
  }

  document.getElementById("vastaus9").innerHTML = "Suurin: " + suurin + " Pienin: " + pienin;
}

function muuta() {

  let salasana = document.getElementById("SSana").value;
  let UusiSalasana ="";
  let aakkoset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "n", "o", "p", "q", "r", "s", "t", "u","v", "w" , "x", "y", "z"];
  let temp = [];
  
  for(let i = 0; i < salasana.length; i++) {
    
    let vanha = salasana[i];   
    temp.push(vanha);

    let monesko = Math.floor(Math.random()*aakkoset.length);
    let uusi = aakkoset[monesko];
    temp.push(uusi);    
  }
  //join("") overrides the charachter (,) in the temp-array.
  UusiSalasana = temp.join("");
  document.getElementById("vastaus10").innerHTML = temp;
  document.getElementById("vastaus11").innerHTML = UusiSalasana;
}

function viimeinen() {
  let x = parseInt(document.getElementById("pieniNro").value);
  let y = parseInt(document.getElementById("isoNro").value);
  let summa1 = 0; 
  let summa2 = 0;
  let parilliset =[];
  let parittomat =[];

    for (let i = x; i <= y; i++) {
      if (x % 2 == 0 ) {
        summa1 += x;
        parilliset.push(x);
        x += 1;
      }
      else if (x % 2 != 0) {
        summa2  += x;
        parittomat.push(x);
        x +=1 ;
      }
      
    }
  
  document.getElementById("vastaus12").innerHTML = "Parilliset: " + parilliset.join(" + ") + " = " + summa1;
  document.getElementById("vastaus13").innerHTML = "Parittomat: " + parittomat.join(" + ") + " = " + summa2;
}

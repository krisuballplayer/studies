function parillinen() {  

    let x = parseInt(document.getElementById("luku1").value);
    let pari = [];

    if (x % 2 !=0) {
      document.getElementById("vastaus1").innerHTML = "Syöttämäsi luku ei ole parillinen!";
    }
    else {  

      for ( x; x > 0; x-- ) {            
          if (x % 2 == 0) {      
              pari.unshift(x);
              document.getElementById("vastaus1").innerHTML = pari;            
          }  
      }            
    
    }      
} 

function lisaakirjain() {

  let sana = document.getElementById("teksti1").value;
  let uusisalasana =" ";

    for (i = 0; i < sana.length; i++) {
      uusisalasana += sana[i] + "Ö";
      document.getElementById("vastaus2").innerHTML = uusisalasana;
    } 
}

function tarkasta() {

  let sana = document.getElementById("teksti2").value;
  
  let myRegex = /ö/;
  let result = myRegex.test(sana); 
  
  document.getElementById("vastaus3").innerHTML = result;
}

function kertoma() {  

  let x = parseInt(document.getElementById("luku2").value);
  let lasku = 1;

    for ( i =  x; i > 0; i-- ) {            
       lasku *= i;
    }  
    
  document.getElementById("vastaus4").innerHTML = "Luvun " + x + " kertoma on " + lasku;     
} 

function check() {  

  let item;  
  let list ="";
  let rivinvaihto ="<br>";

    for (i=1; i <= 100; i++) { 

       if (i % 3 == 0 && i % 5 == 0) {
          item = i + " Hipheijaa!";
          list += item + rivinvaihto;
        
       }
       else if (i % 3 == 0) {
          item = i + " Hip!";
          list += item + rivinvaihto;
          
       }
       else if (i % 5 == 0) {
          item = i + " Heijaa!";
          list += item + rivinvaihto;
          
       }
       else {
          item = i;
          list += item + rivinvaihto;
           
       }     

       document.getElementById("vastaus5").innerHTML = list; 
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

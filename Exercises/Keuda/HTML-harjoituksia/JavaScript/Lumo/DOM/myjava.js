function  muokkaa() {  

  var teksti = document.getElementById("muokattava");
  teksti.style.fontFamily = "Courier";
  teksti.style.color = "green";
  teksti.style.fontSize = "2em";

  //Funktio palauttaa ID:een uuden arvon, joka tässä tapauksessa on "muokattava".
}

function  haeTiedot() {

  let teksti1 = document.getElementById("etunimi").value;
  let teksti2 = document.getElementById("sukunimi").value;

  document.getElementById("vastaus").innerHTML = teksti1 + " " + teksti2;  
}

function vaihdaVäri() {
  let teksti = document.getElementById("väri");
  teksti.style.backgroundColor = "green";
}

/* Ei toimi! Väärä polku kuvalle?
function vaihdaKuva() {
  let teksti = document.getElementById("kuva");
  teksti.style.backgroundImage = url("JavaScript\Lumo\DOM\images\aeroplane.png");
}
*/

function linkitTiedot() {
  var u = document.getElementById("w3r").href;
  alert('The value of the href attribute of the link is : ' + u);
  var v = document.getElementById("w3r").hreflang;
  alert('The value of the hreflang attribute of the link is : ' + v);
  var w = document.getElementById("w3r").rel;
  alert('The value of the rel attribute of the link is : ' + w);
  var x = document.getElementById("w3r").target;
  alert('The value of the taget attribute of the link is : ' + x);
  var y = document.getElementById("w3r").type;
  alert('The value of the type attribute of the link is : ' + y);
}

function lisaaRivi() {
  //lisää taulukkon uuden rivin HUOM! alkuun. (2) lisäisi rivin loppuun.
  var x = document.getElementById('sampleTable').insertRow(0);
  //lisää riville kaksi uutta solua
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.innerHTML = "Uusi solu 1";
  z.innerHTML = "Uusi solu 2";
}

function muutaSolu() {
  rivi = document.getElementById("rivi").value;
  solu = document.getElementById("solu").value;
  sisalto = document.getElementById("sisalto").value;
  document.getElementById("taulukko").rows[rivi].cells[solu].innerHTML = sisalto;
}

function luoTaulukko() {
  rivimaara = document.getElementById("rivi2").value;
  sarakemaara = document.getElementById("solu2").value;

  for (var r = 0; r < parseInt(rivimaara); r++) {
      var x = document.getElementById("taulukko2").insertRow(r);
      for (var s = 0; s < parseInt(sarakemaara); s++) {
          var y = x.insertCell(s);
          y.innerHTML = "Rivi" + r + " Sarake" + s;
      }
  }
}
function toggleText2() {
    var text = document.getElementById("muu2-text");
    text.style.display = document.getElementById("muu2").checked ? "block" : "none";
  }

  function validateForm() {

  let nimi, salasana, status, tarkastus, osaaminen, tarkastus2, teksti;
    
  nimi = document.getElementById("nimi").value; 
  salasana = document.getElementById("salasana").value;
  status = document.getElementsByName("valinta2");
  tarkastus = false;
  osaaminen = document.getElementsByName("valinta3");
  tarkastus2 = false;
  teksti = document.getElementById("bio").value;

  //Checking if any checkbox is selected at Olen.
  for (var i=0; i < status.length;i++) {
    if (status[i].checked == true) {
    tarkastus = true;
    }
  }

  //Checking if any checkbox is selected at Osaan.
  for (var i=0; i < osaaminen.length;i++) {
    if (osaaminen[i].checked == true) {
    tarkastus2 = true;
    }
  }

  if (nimi == "") {
    alert("Et antanut käyttäjänimeä!")
  }
  else if (salasana == "") {
    alert("Et antanut salasanaa!");     
  }
  else if (tarkastus == false) {
    alert("Et antanut statusta!");
  }
  else if (tarkastus2 == false) {
    alert("Et kertonut osaamisestasi!");
  }
  else if (teksti == 0) {
    alert("Kerro nyt jotain itsestäsi!");
  }

}
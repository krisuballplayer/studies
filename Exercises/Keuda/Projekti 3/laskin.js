var viimeinenMerkki = "";

// Lisää tekstiä nappuloista
function lisaaNayttoon(arvo) {
  var nayttoteksti = document.getElementById("tulosnaytto");
  var nykyteksti = nayttoteksti.value;
  nayttoteksti.value += arvo;
  viimeinenMerkki = arvo;

  if (nykyteksti.length > 1) {
    var edellinenMerkki = nykyteksti.slice(-2, -1);
    var nykymekka = nykyteksti.slice(-1);

    // Estää monen "muuttujan" peräkkäin lisäämisen
    if (
      (['+', '-', '*', '/'].includes(edellinenMerkki) && ['+', '-', '*', '/'].includes(nykymekka)) ||
      (nykymekka === '%' && ['+', '-', '*', '/'].includes(edellinenMerkki))
    ) {
      nayttoteksti.value = nykyteksti.slice(0, -1);
    }

    viimeinenMerkki = nykymekka;
  } else if (nykyteksti.length === 1) {
    viimeinenMerkki = nykyteksti;
  }
}

// Laskee tulosken
function laskeTulos() {
  try {
    var nayttoteksti = document.getElementById('tulosnaytto').value;
    
    nayttoteksti = nayttoteksti.replace(/%/g, '/100');
    
    document.getElementById('tulosnaytto').value = eval(nayttoteksti);
  } catch (error) {
    document.getElementById('tulosnaytto').value = 'Virhe';
  }
}

// Tyhjentää näytön kun painaa AC Nappia
function tyhjennaNaytto() {
  document.getElementById('tulosnaytto').value = '';
  viimeinenMerkki = "";
}

// Poistaa yksitellen kirjaimia kun painaa nuoli nappulaa
function removeText() {
  var displayText = document.getElementById("tulosnaytto");
  var currentText = displayText.value;
  if (currentText.length > 0) {
    displayText.value = currentText.slice(0, -1);
    viimeinenMerkki = currentText.slice(-2, -1);
  }
}
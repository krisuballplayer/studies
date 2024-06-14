document.addEventListener('DOMContentLoaded', function () {
    var tekemattaLista = document.getElementById('tekematta-lista');
    var tyonAllaLista = document.getElementById('tyon-alla-lista');
    var valmisLista = document.getElementById('valmis-lista');
    var aktiivinenTehtava = null;
  
    function luoTehtavaElementti(tehtavaTeksti) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(tehtavaTeksti));
      li.draggable = true;
  
      li.addEventListener('dragstart', function (event) {
        aktiivinenTehtava = li;
      });
  
      li.addEventListener('dragend', function () {
        aktiivinenTehtava = null;
      });
  
      return li;
    }
  
    function lisaaTehtava(sarake, tehtavaTeksti) {
      var tehtavaElementti = luoTehtavaElementti(tehtavaTeksti);
      sarake.querySelector('ul').appendChild(tehtavaElementti);
    }
  
    function siirraTehtava(tehtavaElementti, kohdeSarake) {
      tehtavaElementti.parentNode.removeChild(tehtavaElementti);
      kohdeSarake.querySelector('ul').appendChild(tehtavaElementti);
    }
  
    function allowDrop(event) {
      event.preventDefault();
    }
  
    function drop(event) {
      event.preventDefault();
      if (aktiivinenTehtava) {
        var kohdeSarake = event.target.closest('.sarake');
        if (kohdeSarake) {
          siirraTehtava(aktiivinenTehtava, kohdeSarake);
        }
      }
    }
  
    function lisaaTehtavaTekstista() {
      var kirjoitusInput = document.getElementById('kirjoitus-input');
      var tehtavaTeksti = kirjoitusInput.value.trim();
      if (tehtavaTeksti !== '') {
        lisaaTehtava(tekemattaLista, tehtavaTeksti);
        kirjoitusInput.value = '';
      }
    }
  
    var lisaaNappi = document.getElementById('lisaa-nappi');
    lisaaNappi.addEventListener('click', lisaaTehtavaTekstista);
  
    var scrumboardi = document.querySelector('.scrumboardi');
    scrumboardi.addEventListener('dragover', allowDrop);
    scrumboardi.addEventListener('drop', drop);
  });
  
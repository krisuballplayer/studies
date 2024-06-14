var maxPituus = 19;

document.addEventListener('DOMContentLoaded', function () {
  var syoteKentta = document.getElementById("syotto");
  var lisaaNappula = document.getElementById("lisaaNappi");
  var tehtavaLista = document.getElementById("tehtavalista");

  function haeSyotteenPituus() {
      return syoteKentta.value.length;
  }

  function luoTehtavaElementti() {
      var listaelementti = document.createElement("li");

      var katkaistuTeksti = syoteKentta.value.substring(0, maxPituus);
      listaelementti.appendChild(document.createTextNode(katkaistuTeksti + (syoteKentta.value.length > maxPituus ? "..." : "")));

      tehtavaLista.appendChild(listaelementti);
      syoteKentta.value = "";
      listaelementti.classList.add("tehtava");

      var poistaNappula = document.createElement("button");
      poistaNappula.classList.add("poista-nappi");
      poistaNappula.appendChild(document.createTextNode("X"));
      listaelementti.appendChild(poistaNappula);

      listaelementti.addEventListener("click", vaihdaValmis);
      poistaNappula.addEventListener("click", poistaTehtava);
  }

  function vaihdaValmis() {
      this.classList.toggle("valmis");
  }

  function poistaTehtava() {
      this.parentNode.remove();
  }

  function lisaaListallePainalluksenJalkeen() {
      if (haeSyotteenPituus() > 0) {
          luoTehtavaElementti();
      }
  }

  function lisaaListaEnterinJalkeen(event) {
      if (haeSyotteenPituus() > 0 && event.which === 13) {
          luoTehtavaElementti();
      }
  }

  lisaaNappula.addEventListener("click", lisaaListallePainalluksenJalkeen);
  syoteKentta.addEventListener("keypress", lisaaListaEnterinJalkeen);
});
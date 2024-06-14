function hae()
{
  fetch("./omajson.json")
  .then(response => response.json())
    .then(data => {
      document.getElementById("lista").innerHTML = data.haataja[1].sukupuoli + "<br>" + data.haataja[1].nimi;
      console.log(data);
    })
}
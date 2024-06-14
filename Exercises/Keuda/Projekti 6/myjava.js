function lisaa() {
	let autonnumero = document.getElementById("autoNro").value;
    let automerkki = document.getElementById("merkki").value;
    let kuski = document.getElementById("kuski").value;
    let kartturi = document.getElementById("kartturi").value;
    let kansalaisuus = document.getElementById("kSalaisuus").value;
    let instagramtili = document.getElementById("igTili").value;
    let sahkoposti = document.getElementById("sPosti").value;

    //luodaan olio 
    let henkilo = {
        automerkki: automerkki,
        kuski: kuski,
        kartturi: kartturi,
        kansalaisuus: kansalaisuus,
        sahkoposti: sahkoposti,
        instagramtili: instagramtili
    }

    let key = autonnumero //avain yksilöi olion local.storagessa
    localStorage.setItem(key, JSON.stringify(henkilo)); //muuttaa objektin stringiksi
    alert("Auto lisätty listalle!")
    window.location.reload();
}

function hae() { //funktio hakee auton tiedot sen numeron mukaan
   let key = document.getElementById("autoNro").value;
   console.log(key)
   let info = JSON.parse(localStorage.getItem(key));
   console.log(info);

   let info1 = document.createElement("p");
   let info2 = document.createElement("p");
   let info3 = document.createElement("p");
   let info4 = document.createElement("p");
   let info5 = document.createElement("p");
   let info6 = document.createElement("p");

   let teksti1 = document.createTextNode("Merkki: " + info.automerkki);
   let teksti2 = document.createTextNode("Kuski: " + info.kuski);
   let teksti3 = document.createTextNode("Kartturi: " + info.kartturi);  
   let teksti4 = document.createTextNode("Kansalaisuus: " + info.kansalaisuus);
   let teksti5 = document.createTextNode("Sähköposti: " + info.sahkoposti);
   let teksti6 = document.createTextNode("Instagramtili: " + info.instagramtili);  

   info1.appendChild(teksti1); 
   info2.appendChild(teksti2);
   info3.appendChild(teksti3);
   info4.appendChild(teksti4); 
   info5.appendChild(teksti5);
   info6.appendChild(teksti6);

   let kasaus = document.getElementById("naytto");
   kasaus.appendChild(info1);
   kasaus.appendChild(info2);
   kasaus.appendChild(info3);
   kasaus.appendChild(info4);
   kasaus.appendChild(info5);
   kasaus.appendChild(info6);
    setTimeout(function() { 
    window.location.reload();}, 10000); //näyttää tiedot 10 sekuntia
}

function poista() {
    let avain = document.getElementById('autoNro').value;
    localStorage.removeItem(avain);
    alert("Auto poistettu listalta!");
    window.location.reload();
}

function listaa() {
    
   
    
    let kasaus = document.getElementById("naytto");
    for (let i = 0; i < localStorage.length; i++) {
        let avain = localStorage.key(i);
        let arvo = localStorage.getItem(avain);
        console.log(avain + "" + arvo);
        
        
        
        
        
        
     }
 
   
   
   
    }


//popup-ikkunan koodi alkaa
function avaaIkkuna() {
    let ikkuna = document.getElementById("popup");
    ikkuna.classList.add("active");
}

function suljeIkkuna() {
    let ikkuna = document.getElementById("popup");
    ikkuna.classList.remove("active");
}








    
    










    

    

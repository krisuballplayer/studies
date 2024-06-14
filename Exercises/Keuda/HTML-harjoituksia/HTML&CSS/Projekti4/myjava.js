function laheta()
{
	let etunimi = document.getElementById("eNimi").value;
    let sukunimi = document.getElementById("sNimi").value;
    let puhelinnumero = document.getElementById("puhNumero").value;
    let sahkoposti = document.getElementById("sPosti").value;
    let osallistujamaara = document.getElementById("oMaara").value;
    let viesti = document.getElementById("viesti").value;
    let vastaus = document.lomake.kyyti;
    let vastaus2 = document.lomake.valineet;
    let tarkastus = false;
    let tarkastus2 = false;

    for (let i = 0; i < vastaus.length; i++) {
        if (vastaus[i].checked) {
            tarkastus = true;
        } 
    }

    for (let i = 0; i < vastaus2.length; i++) {
        let lista = [];
        if (vastaus2[i].checked) {
            tarkastus2 = true;
            let tavara = vastaus2[i];
            lista.push(tavara);
        } 
    }

    if (etunimi == "") {
        alert("Et syöttänyt etunimeä. Ole hyvä ja syötä se!");
        document.getElementById("eNimi").focus();
    }

    else if (sukunimi == "") {
        alert("Et syöttänyt sukunimeä. Ole hyvä ja syötä se!");
        document.getElementById("sNimi").focus();
    }
    else if (isNaN(puhelinnumero) || puhelinnumero == "") {
        alert("Et syöttänyt puhelinnumeroa tai se on virheellinen! Ole hyvä syötä se uudestaan esimerkin mukaan!");
        document.getElementById("puhNumero").focus();
    } 
    else if(sahkoposti.indexOf('@',0) == -1) {
        alert("Et antanut sähköpostiosoitettasi tai se on virheellinen!");
        document.getElementById("sPosti").focus();
    }
    else if (osallistujamaara <= 0 || osallistujamaara == "") {
        alert("Et syöttänyt osallistujamäärää. Ole hyvä ja syötä se!");
        document.getElementById("oMaara").focus();
    }
    else if (osallistujamaara <= 0 || osallistujamaara == "") {
        alert("Et syöttänyt osallistujamäärää. Ole hyvä ja syötä se!");
        document.getElementById("oMaara").focus();
    }   
    else if (tarkastus == false) {
        alert("Valitse jompikumpi kyytivaihtoehdoista!");            
    }
    else if (tarkastus2 == false) {
        alert("Valitse ainakin yksi vaihtoehto välineistä tai sitten en tarvitse!") 
    }
    else if(viesti.length > 300) {
        alert("Vähän liian pitkä viesti! Muista max. 300 merkkiä!")
        document.getElementById("viesti").focus();

    } 

    
    
}





    

    

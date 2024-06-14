let riveja = 4;
let sarakkeita = 4;
let huteja = 0;
let kortit = ['kuva1', 'kuva2', 'kuva3', 'kuva4', 'kuva5', 'kuva6', 'kuva7', 'kuva8'];
let korttiLista = [...kortit, ...kortit]; //tekee uuden taulukon, jossa kaksi kortit-taulukkoa 
let korttiLaskin = korttiLista.length;
let uusiLista = [];
let PA = [];
let ensimmainenValittu; 
let toinenValittu; 
let laskin = 0;
let hudit = 0;
let loydetytKortit = 0;

window.onload = function () {
    sekoitaKortit();
    aloitaPeli();
}

//sekoitta kortit taulukossa korttiLista
function sekoitaKortit () {
    for (let i = 0; i < korttiLaskin; i++) {
        let luoIndeksi = Math.floor(Math.random() * korttiLista.length);
        uusiLista.push(korttiLista[luoIndeksi]); 
        korttiLista.splice(luoIndeksi,1); //poistaa jo valitun kortin seuraavalle kierrokselle  
    }
}

//rakentaa pelialustan
function aloitaPeli () {
    for (let r = 0; r < riveja; r++) {
        let rivi = [];
        for (let s = 0; s < sarakkeita; s++) {
            let kuva = uusiLista.pop(); //poimii viimeisen kortin taulukosta
            rivi.push(kuva); //sijoittaa "popatun" kortin row-taulukon viimeiseksi
            
            //luodaan kuva-elementti johon kuva, tyyli ja yksilöllinen ID
            let kortti = document.createElement("img");
            kortti.id = r.toString() + "-" + s.toString(); //ensimmäisen korttin ID = "0-0"
            kortti.src = kuva + ".png";
            kortti.classList.add("kortti");
            kortti.addEventListener("click", valitutKortit); //kutsuu funktiota valittuKortti
            document.getElementById("pelialusta").append(kortti);
        }
        PA.push(rivi)//työntää valmiin rivin jossa neljä saraketta pelialustalle
    }

//piilotetaan kortit
    for (let r = 0; r < riveja; r++) {
        for (let s = 0; s < sarakkeita; s++) {
            let palloja = document.getElementById(r.toString() + "-" + s.toString()); 
            palloja.src = "palloja.jpg";
        }
    }
} 

function valitutKortit () {
    if (this.src.includes("palloja")) {
        if (laskin === 0) {
            ensimmainenValittu = this;

            let koordinaatit = ensimmainenValittu.id.split("-"); //hajoittaa kortin ID:een muotoon esim. ["0", "2"]
            let r = parseInt(koordinaatit[0]);
            let s = parseInt(koordinaatit[1]);

            ensimmainenValittu.src = PA[r][s] + ".png"; //hakee kortin nimen taulukosta esim. rivi 0 ja sarake 2
            laskin = 1; 
           
        }
        else {
            toinenValittu = this;

            let koordinaatit = toinenValittu.id.split("-"); 
            let r = parseInt(koordinaatit[0]);
            let s = parseInt(koordinaatit[1]);

            toinenValittu.src = PA[r][s] + ".png";
            laskin = 0;
            setTimeout(tarkastetaan, 1200);
        }
    }
    else {
        alert("Kortti on jo käännetty!")
        return;
    } 
}

function tarkastetaan () {
    if (ensimmainenValittu.src != toinenValittu.src) {
        
        ensimmainenValittu.src = "palloja.jpg";
        toinenValittu.src = "palloja.jpg";
        hudit += 1;
        document.getElementById("huteja").innerText = "Huteja: " + hudit;
        
        ensimmainenValittu = null; //nollataan muuttuja
        toinenValittu = null;
    }
    else {
        ensimmainenValittu = null; //nollataan muuttuja
        toinenValittu = null;
        loydetytKortit += 2;
         
            if (loydetytKortit == 16) {
                alert("Onneksi olkoon löysit kaikki kortit! Jos haluat pelata uudestaan, niin klikkaa selaimen päivitysnappia.")
            }
    }
}

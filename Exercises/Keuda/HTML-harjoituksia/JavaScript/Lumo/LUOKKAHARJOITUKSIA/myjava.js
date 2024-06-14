/*LH C01
function Henkiloluokka (etunimi, sukunimi, ika) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.ika = ika;
}

let risto = new Henkiloluokka("Risto", "Reipas", 10);

console.log(risto);*/

/*LH02
function Henkiloluokka (etunimi, sukunimi, ika) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.ika = ika;
}

let risto = new Henkiloluokka("Risto", "Reipas", 10);
risto.sukunimi = "Reippaampi";
risto.ika = 11;

console.log(risto);*/

/*LH07
class Ajoneuvo {
    constructor (merkki, malli, vuosimalli) {
        this.merkki = merkki;
        this.malli = malli;
        this.vuosimalli = vuosimalli;
    }

    aja() {
        console.log("Ajetaan ajoneuvoa " + this.merkki + " " + this.malli + " " + this.vuosimalli);
    }
}

class Auto extends Ajoneuvo {
    constructor (malli, merkki, vuosimalli) {
        super(malli, merkki, vuosimalli);
    }
}

function TestiAjo() {    
    let mersu = new Auto ("Mersu", "SL40", 1999);
    mersu.aja();
    }

TestiAjo();*/

/*LH08
class Ajoneuvo {
    constructor (merkki, malli, vuosimalli) {
        this.merkki = merkki;
        this.malli = malli;
        this.vuosimalli = vuosimalli;
    }

    aja() {
        console.log("Ajetaan ajoneuvoa " + this.merkki + " " + this.malli + " " + this.vuosimalli + " jossa on " + this.pyorat + " pyörää.");
    }

    kiihdyta() {
        console.log("Kiihdytetään ajoneuvoa " + this.merkki + " " + this.malli + " " + this.vuosimalli + " jossa on " + this.pyorat + " pyörää.");
    }
    
}

class Auto extends Ajoneuvo {
    constructor (malli, merkki, vuosimalli, pyorat = 4) {
        super(malli, merkki, vuosimalli);
        this.pyorat = pyorat;

    }
}

class Moottoripyora extends Auto {
    constructor(merkki, malli, vuosimalli, pyorat = 2) {
        super(merkki, malli, vuosimalli, pyorat);
    }
}

function TestiAjo() {    
    let mersu = new Auto ("Mersu", "SL40", 1999);
    mersu.aja();
    let moottoripyora = new Moottoripyora ("Kawasaki", "Speedster", 2013);
    moottoripyora.kiihdyta();
    }

TestiAjo();*/

/*class Pankkitili {
    constructor() {
    this.saldo = 0;
    }
//Periikö funktiot talleta ja nosta luokan Pankkitilin automaattisesti vaikka sitä ei missään määritettä?
    talleta(maara) {
    if (maara > 0) {
        this.saldo += maara;
        console.log(`Talletettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`);
    } else {
        console.log("Talletettava määrä on virheellinen.");
    }
    }

    nosta(maara) {
    if (maara > 0) {
        if (maara <= this.saldo) {
        this.saldo -= maara;
        console.log(`Nostettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`);
        } else {
        console.log("Nostettava määrä ylittää tilin saldon.");
        }
    } else {
        console.log("Nostettava määrä on virheellinen.");
    }
    }
    }

    // Käytetään Pankkitili-luokkaa
    const tili = new Pankkitili();
    tili.talleta(100); // Talletettu 100 euroa. Uusi saldo: 100 euroa.
    tili.nosta(50);   // Nostettu 50 euroa. Uusi saldo: 50 euroa.
    tili.nosta(70);   // Nostettava määrä ylittää tilin saldon.
    tili.talleta(-20); // Talletettava määrä on virheellinen.*/




















   

    










 




    





    






















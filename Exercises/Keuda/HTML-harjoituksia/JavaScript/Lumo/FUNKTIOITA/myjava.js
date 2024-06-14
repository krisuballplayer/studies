/*F01
function laskeSumma (nro1, nro2) {
    return  summa = nro1 + nro2;
}

console.log(laskeSumma(8,9));
*/

/*F02
function laskeNelionPA (sivu) {
    return PA = sivu * sivu;
}

console.log(laskeNelionPA(9));
*/

/*F03
function laskeYmpyraPA (sade) {
    return Math.PI * sade * sade;
}

console.log(laskeYmpyraPA(6.5));
*/

/*F04
function laskeKA (taulukko) {
    let summa = 0;
    for (let i = 0; i <= taulukko.length-1; i++) {
        summa += taulukko[i];
    }
    
    return ka = summa / taulukko.length;

}

console.log(laskeKA([9,3,5,6,2]));
*/


/*F05
function pariTaiPariton (luku) {

    if (luku % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
pariTaiPariton(11);
pariTaiPariton(12);
*/

/*F07
function merkkijonoPituus(mjono) {

    if (mjono.length > 0) {
        return (true);
    } 
    else {
        return (false);
    }
}

console.log(merkkijonoPituus(""));
console.log(merkkijonoPituus("Krister"));
*/

/*F08
function suurinLuku (taulukko) {
    let vertailu = 0;

    for (let i = 0; i <= taulukko.length - 1 ; i++) {
        if (taulukko[i] > vertailu) { 
                vertailu = taulukko[i];
        }  
    }

    return vertailu;
}

console.log(suurinLuku([2, 7, 1, 9, 3, 6, 45, 56, 78]));


function laskeSuurin(taulukko) {
    return Math.max(...taulukko);
    }

    console.log(laskeSuurin([2, 7, 1, 9, 3])); // Tulostaa 9
*/

/*
function laskeTaulukonSumma(taulukko) {
    return taulukko.reduce((acc, numero) => acc + numero, 0);
    }

    console.log(laskeTaulukonSumma([1, 2, 3, 4, 5])); // Tulostaa 15
*/

/*
function muutaEkaKirjainIsoksi(merkkijono) {
    //Miksi ei poista ensimmäistä kirjainta, joka on muuteettu isoksi? Erikoista ja hieman epäloogista!
    return merkkijono.charAt(0).toUpperCase() + merkkijono.slice(0);
    }

    console.log(muutaEkaKirjainIsoksi("terve")); // Tulostaa "Terve"
*/

/*
function onkoAnagrammi(sana1, sana2) {
    const sana1Jarjestetty = sana1.split('').sort().join('');
    const sana2Jarjestetty = sana2.split('').sort().join('');
    return sana1Jarjestetty === sana2Jarjestetty;
    }

    console.log(onkoAnagrammi("12345", "52344")); // Tulostaa false
    console.log(onkoAnagrammi("rolwd", "world")); // Tulostaa false
*/

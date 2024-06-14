async function vitsi() {
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3efe4a9dd1msh174bff0ae4c69bfp123ec9jsn304403dd1a4b',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        document.getElementById("vitsi").innerHTML = result.body[0].setup + "</br>" + result.body[0].punchline +".";
    } catch (error) {
        console.error(error);
    } 
}  

async function saa() {
    let paikkakunta = document.getElementById("kaupunki").value;
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + paikkakunta;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '527371f994msh57563f768dd80f6p135d33jsn69c07817117b',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        document.getElementById("saa").innerHTML =
            "Paikkakunta: " + result.location.name + ", " + result.location.country + " <br/>" +
            "Asteosoite: " + result.location.lat + " leveysastetta ja " + result.location.lon + " pituusastetta <br/>" +
            "Lämpötila: " + result.current.temp_c + " astetta<br/>" +
            "Kosteus: " + result.current.humidity + "<br/>" +
            "Tuulen nopeus " + result.current.wind_kph + " km/t";
    } catch (error) {
        console.error(error);
    }
}

async function resepti() {
let drinkki = document.getElementById("cocktail").value;
const url = 'https://the-cocktail-db3.p.rapidapi.com/' + drinkki;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3efe4a9dd1msh174bff0ae4c69bfp123ec9jsn304403dd1a4b',
		'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
	}

};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  
    document.getElementById("resepti").innerHTML =
            "Kuvaus:" + result.description  + "<br/>" + "Ainekset:" + result.ingredients + "<br/>" + "Tekotapa:" + result.method[0]["Step 1"] + "<br/>" + "<img src='" + result.image + "'>";

} catch (error) {
	console.error(error);
}
}

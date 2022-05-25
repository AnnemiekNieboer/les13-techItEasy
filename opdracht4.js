// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//
// Pseudo code stappenplan:
// Stap 1: Maak een functie aan voor tvFormat
// Stap 2: Voeg parameter toe voor de te selecteren tv
// Stap 3: Geef een string return met merk, type en naam uit de inventory

import {inventory} from "./inventory.js";

export function tvFormat (selectedTv) {
    return `${selectedTv.brand} ${selectedTv.type} - ${selectedTv.name}`;
}

// console.log("Opdracht 4a:")
// console.log(tvFormat(inventory[1]))

//
//     Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
//Pseudo code stappenplan:
//Stap 1: Maak een functie aan voor tvPricesFormat
//Stap 2: Voeg parameter toe voor de te selecteren tv
//Stap 3: Geef een string return met euroteken voor het bedrag en ,- op einde

export function tvPricesFormat(selectedTv) {
    return `€${selectedTv.price},-`;
}

// console.log("Opdracht 4b:")
// console.log(tvPricesFormat(inventory[1]));

//
// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor
// alle beschikbare schermgroottes van één tv. De functie geeft dit terug
// in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) |
// [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv
// maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de
// output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op:
// om één string te genereren uit een array van schermgroottes zul je een
// for-loop voor moeten gebruiken.
//Pseudo code stappenplan:
//Stap 1: Maak een functie aan voor screenSizesFormat
//Stap 2: Voeg een parameter toe voor de te selecteren tv
//Stap 3: Geef een string return middels if statement voor 4 schermgrootte in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) |
// // [schermgrootte] inches ([schermgrootte omgerekend]cm)
//Stap 4: Geef een string return middels if statement voor 1 schermgrootte in het format 32 inch (81 cm)

 export function screenSizesFormat(selectedTv) {
    let onePriceFormat = `${selectedTv.availableSizes[0]} inches (${selectedTv.availableSizes[0] * 2.54} cm) `
    let fourPricesFormat = `${selectedTv.availableSizes[0]} inches (${selectedTv.availableSizes[0] * 2.54} cm) | ${selectedTv.availableSizes[1]} inches (${selectedTv.availableSizes[1] * 2.54} cm) | ${selectedTv.availableSizes[2]} inches (${selectedTv.availableSizes[2] * 2.54} cm) | ${selectedTv.availableSizes[3]} inches (${selectedTv.availableSizes[3] * 2.54} cm) `;
    if (selectedTv.availableSizes.length === 1) {
        return onePriceFormat
    } if (selectedTv.availableSizes.length === 4) {
        return fourPricesFormat;
    }
}

// console.log("Opdracht 4c:")
// console.log(screenSizesFormat(inventory[3]));


//
//     Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken
// met alle tv-type namen. Log de uitkomst in de console.

//Pseudo stappenplan:
//Stap 1: maak een nieuwe variabele aan om de nieuwe array in op te slaan
//Stap 2: Map over de originele array heen
//Stap 3: Return de types

import {inventory} from "./inventory.js";

export const tvTypes = inventory.map((inventory) => {
    return inventory.type;
})

// console.log(tvTypes);

//     Opdracht 1b: Gebruik een array-methode
//     om alle tv's te verzamelen (de hele
//     objecten) die volledig uitverkocht zijn.
//     Log de uitkomst in de console.

//Pseudo stappenplan:
//Stap 1: Maak een variabele aan om de current stock
//in op te slaan (originalStock - Sold)
//Stap 2: haal items op die uitverkocth zijn (current
// stock === o)
//Stap 3 export currentSoldOut

export const soldOut = inventory.filter((tv) => {
    let currentStock = tv.originalStock - tv.sold;
    if (currentStock === 0) {
        return tv;
    }
})


// console.log(soldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen
// (de hele objecten) die over AmbiLight beschikken.
// Log de uitkomst in de console.

//Pseudo code stappenplan:
//Stap 1: Maak een variabele aan om Ambilight objecten in op te slaan
//Stap 2: Filter de objecten uit de inventory op options.ambilight true
//Stap 3: Return de items

export const ambiLightTv = inventory.filter((tv) => {
    if (tv.options.ambiLight === true) {
        return tv;
    }
})

// console.log(ambiLightTv);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar
// hoogste prijs sorteert. Log de uitkomst in de console.

//Pseudo code stappenplan:
//Stap 1: Maak een variabele aan om de nieuwe lijst in op te slaan (=niet noodzakelijk, maar netjes)
//Stap 2: Voeg sort toe aan de inventory lijst, met een a en b parameter in de callback functie

export const sortByPrice = inventory.sort((a , b)=> {
    return a.price - b.price;
})

// console.log(sortByPrice);
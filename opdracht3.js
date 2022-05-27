import {inventory} from "./inventory.js";

// #### Opdracht 3 - Array methoden en functies
//
// * **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
// pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
// dubbele namen in zitten, is niet erg.

export const createTableOfTvBrands = () => {
    const tableOfTvBrands = document.getElementById("tv-brands");

    return inventory.map((tv) => {

        tableOfTvBrands.innerHTML += `
        <tr>
            <td>${tv.brand}</td>
        </tr>
        `
    });
};


// * **Opdracht 3b:** Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
// onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
// -declaratie niet aan te roepen!

export const createTableOfTvObjects = (array, heading) => {
    const tableOfTvObjects = document.getElementById("tv-object");
    tableOfTvObjects.innerHTML = `
        <tr>
            <th>${heading}</th>
        </tr>
        `
    return array.map((tv) => {

        tableOfTvObjects.innerHTML += `
        <tr>
            <td>${tv.brand}</td>
        </tr>
        `
    });
};


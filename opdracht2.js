import {inventory} from "./inventory.js";

// #### Opdracht 2 - Elementen in de DOM plaatsen
//
// _Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
// een oude vertrouwde for-loop voor!
//
// * **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent.
// Log de uitkomst in de console.
//Pseudo Stappenplan:
//Stap 1: Maak een nieuwe variabele aan om de verkochte tv's in op te slaan
//Stap 2: Haal de verkochte tv's op (sold)
//Stap 3: Bereken de sum van de array en plaats deze in een variabele
//Stap 4: Return het aantal verkochte tv's

// Versie met twee anonieme functions
// export const soldTvs = inventory.map((tv) => {
//     return tv.sold;
//
// });
//
// export const totalSumOfSoldTvs = () => {
//     let sum = 0;
//     for (let i = 0; i < soldTvs.length; i++) {
//         sum += soldTvs[i];
//     }
//     return sum;
// }
//
// console.log(totalSumOfSoldTvs());

//Versie in 1 anonieme functie zonder for loop
export const totalSumOfSoldTvs = () => {
    let totalSoldTvs = null;
    inventory.map((tv) => {
        totalSoldTvs += tv.sold;
    })
    return totalSoldTvs;
}

// * **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt
// weergegeven op de pagina.

export const createSoldTvs = () => {
    const soldTvs = document.getElementById("sold-tvs");
    soldTvs.innerText = `${totalSumOfSoldTvs()} tv's are sold`
    soldTvs.style.color = "#24D594";
};

// * **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf
// een script dat dit berekent. Log de uitkomst in de console.

// Versie met twee anonieme functions
// const boughtTvs = inventory.map ((tv) => {
//     return tv.originalStock;
// })
//
// const totalSumOfPurchasedTvs = () => {
//     let sum = 0;
//     for (let i = 0; i < boughtTvs.length ; i++) {
//         sum += boughtTvs[i];
//     }
//     return sum;
// }
// console.log(totalSumOfPurchasedTvs());

//Versie in 1 anonieme functie zonder for loop
export const totalSumOfPurchasedTvs = () => {
    let totalTv = null;
    inventory.map ((tv) => {
        totalTv += tv.originalStock;
    })
    return totalTv;
}

// * **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt
// weergegeven op de pagina.

export const createPurchasedTvs = () => {
    const purchasedTVs = document.getElementById("tvs-purchased");
    purchasedTVs.innerText = `${totalSumOfPurchasedTvs()} tv's are purchased`;
    purchasedTVs.style.color = "#3095E7";
}

// * **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht
// moeten worden.

export const createAmountOfStock = () => {
    let totalAmountOfStock = totalSumOfPurchasedTvs() - totalSumOfSoldTvs();
    let currentStock = document.getElementById("tvs-in-stock");
    currentStock.innerText = `${totalAmountOfStock} tv's are still in stock`;
    currentStock.style.color = "red";
}
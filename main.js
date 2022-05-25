import {ambiLightTv, soldOut, sortByPrice, tvTypes} from "./opdracht1.js";
import {createPurchasedTvs, createSoldTvs, createAmountOfStock} from "./opdracht2.js";
import {tvFormat, tvPricesFormat, screenSizesFormat} from "./opdracht4.js";
import {inventory} from "./inventory.js";
import {createTableOfTvBrands, createTableOfTvObjects} from "./opdracht3.js";

//Opdracht 1

console.log("Opdracht 1a:")
console.log(tvTypes);

console.log("Opdracht 1b:")
console.log(soldOut);

console.log("Opdracht 1c:")
console.log(ambiLightTv);

console.log("Opdracht 1d:")
console.log(sortByPrice);

//Opdracht 2
createSoldTvs();
createPurchasedTvs();
createAmountOfStock();

//Opdracht 3
console.log("Opdracht 3a")
createTableOfTvBrands();

console.log("Opdracht 3b")
createTableOfTvObjects(inventory, "Zelf in te vullen kopje");

//Opdracht 4
console.log("Opdracht 4a:")
console.log(tvFormat(inventory[1]))

console.log("Opdracht 4b:")
console.log(tvPricesFormat(inventory[1]));

console.log("Opdracht 4c:")
console.log(screenSizesFormat(inventory[3]));

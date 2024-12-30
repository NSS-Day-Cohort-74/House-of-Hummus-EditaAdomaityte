import { FoodTruck } from "./FoodTruck.js"
import { handlePurchaseClick } from "./Sales.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = async() => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()
document.addEventListener("click", handlePurchaseClick )

document.addEventListener("newPurchaseMade",event =>{
    console.log("New Purchase Made")
    renderAllHTML()
})
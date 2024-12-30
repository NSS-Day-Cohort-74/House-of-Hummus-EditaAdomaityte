import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
   const salesHTML =await Sales()
   const sideHTML = await Sides()
   const veggieHTML = await Veggies()
   const entreeHTML = await Entrees()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="options">
            <section class="choices__entree options">
                <h2>Entrees</h2>
                ${entreeHTML}
            </section>
            <section class="choices__vegetable options">
                <h2>Vegetables</h2>
                ${veggieHTML}
            </section>
            <section class="choices__side options">
                <h2>Sides</h2>
                ${sideHTML}
            </section>
            
        </article>    

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
           ${salesHTML}
        </article>

    `
}
 
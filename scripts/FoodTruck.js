//import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"

export const FoodTruck = async () => {
   // const salesHTML = Sales()
   const sideHTML = await Sides()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="options">
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
           
        </article>

    `
}
 //${salesHTML}
import { saveOrder } from "./TransientState.js"




export const handlePurchaseClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        saveOrder()
    }
}


export const Sales = async () => {
    const fetchSales = await fetch("http://localhost:3000/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await fetchSales.json()
    let number = 1
    let salesDivs = sales.map(
        (sale) => {

            const SalePrice = (sale.entree.price + sale.vegetable.price + sale.side.price).toFixed(2)
            return `<div>
            Receipt #${number++} = $ ${SalePrice}
            </div>`
        }
    )

    salesDivs = salesDivs.join("")

    return salesDivs
}


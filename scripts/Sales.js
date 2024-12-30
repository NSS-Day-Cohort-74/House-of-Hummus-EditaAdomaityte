import { saveOrder } from "./TransientState.js"




export const handlePurchaseClick = (clickEvent) => {
    if(clickEvent.target.id === "purchase"){
        saveOrder()
    }
}


export const Sales = async () => {
    const fetchSales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await fetchSales.json
    
    let salesDivs = sales.map(
        (sale) => {
            let number = 0
            const SalePrice=sale.entree.price+sale.vegetable.price+sale.order.price
            return `<div>
            Receipt #${number++} = $ ${SalePrice}
            </div>`
        }
    )

    salesDivs = salesDivs.join("")

    return salesDivs
}


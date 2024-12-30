import { setVegetableId } from "./TransientState.js"


export const Veggies = async() => {
   document.addEventListener("change",handleVeggieChange)
    const getVeggies = await fetch("http://localhost:3000/vegetables")
    const veggies = await getVeggies.json()

    let html = ""
    const mapVeggies = veggies.map(
        (veggie) => {
            return `<div>
            <input type='radio' name='veggie' value='${veggie.id}'/>${veggie.type}
            </div>`
        }
     )

     html += mapVeggies.join("")
    return html
}

const handleVeggieChange = (changeEvent) =>{
    if(changeEvent.target.name === 'veggie'){
        const convertToNumber = parseInt(changeEvent.target.value)
        setVegetableId(convertToNumber)
    }
}
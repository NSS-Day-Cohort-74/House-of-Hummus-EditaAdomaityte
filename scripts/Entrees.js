import { setEntreeId } from "./TransientState.js"


export const Entrees = async() => {
   document.addEventListener("change",handleEntreeChange)
    const getEntrees = await fetch("http://localhost:3000/entrees")
    const entrees = await getEntrees.json()

    let html = ""
    const mapEntrees = entrees.map(
        (entree) => {
            return `<div>
            <input type='radio' name='entree' value='${entree.id}'/>${entree.name}
            </div>`
        }
     )

     html += mapEntrees.join("")
    return html
}

const handleEntreeChange = (changeEvent) =>{
    if(changeEvent.target.name === 'entree'){
        const convertToNumber = parseInt(changeEvent.target.value)
        setEntreeId(convertToNumber)
    }
}
import { setSideId } from "./TransientState.js"


export const Sides = async () => {
    document.addEventListener("change", handleSideChange)
    const getSides = await fetch("http://localhost:3000/sides")
    const sides = await getSides.json()

    let html = ""
    const mapSides = sides.map(
        (side) => {
            return `<div>
            <input type='radio' name='side' value='${side.id}'/>${side.title}
            </div>`
        }
    )

    html += mapSides.join("")
    return html
}

const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === 'side') {
        const convertToNumber = parseInt(changeEvent.target.value)
        setSideId(convertToNumber)
    }
}
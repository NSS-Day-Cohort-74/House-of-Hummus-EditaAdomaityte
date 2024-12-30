const transientState = {
    "id": 0,
    "entreeId":0,
    "vegetableId":0,
    "sideId":0
}

export const setEntreeId = (chooseEntree) => {
    transientState.entreeId = chooseEntree
    console.log(transientState)
}

export const setVegetableId = (chooseVegetable) => {
    transientState.vegetableId = chooseVegetable
    console.log(transientState)
}

export const setSideId = (chooseSide) => {
    transientState.sideId = chooseSide
    console.log(transientState)
}

export const saveOrder = async() =>{
    const postOptions ={
        method: "POST",
        headers:{
            "Content-Type": "application/json"},
        body: JSON.stringify(transientState)
    }
    const response = await fetch ("http://localhost:3000/purchases", postOptions)
    const customEvent = new CustomEvent("newPurchaseMade")
    document.dispatchEvent(customEvent)
}
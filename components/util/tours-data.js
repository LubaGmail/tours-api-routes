const DATA_API = 'https://tours-f1b12-default-rtdb.firebaseio.com/tours.json'

const ToursData = () => {
    // const intro = `Witness the building of the pyramids or the sack of Rome. 
    //     Investigate the age of the dinosaurs firsthand. 
    //     Visit the Minoan shrine and clime the steps of the Parthenon in Athens.`
}

export async function getTours() {
    const res = await fetch(DATA_API)
    const data = await res.json()
    
    const tours = []
    for (let key in data) {
        tours.push({
            tourid: key,
            ...data[key],
        })
    } 
    return tours
}

export async function getTour(tourid) {
    const tours = await getTours()
    const tour = tours.find(el => el.tourid === tourid)
    return tour
}

export default ToursData
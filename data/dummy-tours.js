const DUMMY_TOURS = [
    {
        tourid: 't1',
        title: 'Dances with the Bulls',
        period: 'Crete in the Bronze Age',
        price: '190,000.00',
        image: '/images/minoan.jpg',
        startDate: '2023/01/01',
        endDate: '2023/01/07',
        desc: 'Our time machine will wisk you to Crete circa 1700 BC. \n' +
            'Become an honored guest in the palace of King Minos. \n' +
            'Converse with the chief inventor Dedalus who will demonstrate his new flying aparatus. \n' +
            'Watch the famed dances with the Bulls at the main Minoan arena.'
    },
    {
        tourid: 't2',
        title:  'Walk with the Romans',
        period: 'Emperial Rome',
        price: '201,050.00',
        image: '/images/rome.jpg',
        startDate: '2023/02/15',
        endDate: '2023/02/21',
        desc: 'Walk the ancient streets of Rome. Witness hot debates in the Senate. \n' +
            'Become an honored guest at the symposium of a consul of Rome. \n' +
            'The highlight of the tour will be the visit of the gladiatorial games at the Coliseum. '
    },
    {
        tourid: 't3',
        title: 'Meet the Athenians',
        period: 'Athenes\'s Golden Age',
        price: '198,050.00',
        image: '/images/greece.jpg',
        startDate: '2023/02/25',
        endDate: '2023/03/08',
        desc: 'Witness a political meeting at the Agora.  Climb the steps of Parthenon. \n' +
            'You will be invited to the symposium of beautiful Aspasia.  Pericles might join in the evening. \n' +
            'Watch the famous play "The Persians" by  Aeschylus performed at the glorious Dionysus theatre.'
    }

]

export const intro = `
    Witness the building of the pyramids or the sack of Rome. 
    Investigate the age of the dinosaurs firsthand. 
    Visit the Minoan shrine and clime the steps of the Parthenon in Athens. 
`

export function getAllTours() {
    return DUMMY_TOURS
}

export function getTourById(tourid) {
    let res = DUMMY_TOURS.find(el => el.tourid === tourid)
    return res
}

export function filterTours(year, month) {
    let res = DUMMY_TOURS.filter(el => {
        let startDate = new Date(el.startDate)
        let sdYear = startDate.getFullYear()
        let sdMonth = startDate.getMonth()
       
        if (sdYear == year && (sdMonth + 1) == month) {
            return el
        }
    })
 
    return res
}

export default DUMMY_TOURS


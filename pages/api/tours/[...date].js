import { getTours } from '../../../components/util/tours-data'

// http://localhost:3000/api/tours/2023/1

const handler = async (req, res) => {
    //  query: { date: [ '2022', '1' ] },
    switch (req.method) {
        case 'GET':
            let year = +req.query.date[0]; let month = +req.query.date[1]
         
            // validation must be done both in UI and in the server component
            //   
            if (isNaN(year) || isNaN(month)) {
                res.status(422).json({ appStatus: 'invalid date', error: req.query.date })
                return
            }

            const tours = await getTours()
            let filteredTours = tours.filter(el => {
                let startDate = new Date(el.startDate)
                let sdYear = startDate.getFullYear()
                let sdMonth = startDate.getMonth()
               
                if (sdYear == year && (sdMonth + 1) == month) {
                    return el
                }
            })
            
            res.status(200).json({ appStatus: 'success', data: filteredTours })

            break
        default:
            console.log('unhandled HTTP method')
    }
}

export default handler
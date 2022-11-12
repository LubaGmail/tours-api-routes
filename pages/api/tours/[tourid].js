import { getTour } from '../../../components/util/tours-data'

// http://localhost:3000/api/tours/t1

const handler = async (req, res) => {
    //  query: { date: [ '2022', '1' ] },
    switch (req.method) {
        case 'GET':
            let tourid = req.query.tourid
            const tour = await getTour(tourid)
                        
            res.status(200).json({ appStatus: 'success', data: tour })
            // res.status(500).json({ appStatus: 'failed', error: 'application' })

            break
        default:
            console.log('unhandled HTTP method')
    }
}

export default handler
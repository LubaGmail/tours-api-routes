import { getTours } from '../../../components/util/tours-data'

// http://localhost:3000/api/tours

const handler = async (req, res) => {
    switch (req.method) {
        case 'GET':
            const tours = await getTours()
            res.status(200).json({ status: 'success', data: tours })
            break
        default:
            console.log('unhandled HTTP method')
    }
}

export default handler
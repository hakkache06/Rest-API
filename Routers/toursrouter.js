
const usersrouter = express.Router()

toursrouter.route('/')
.get(GetAllTours)
.post(addTours)

toursrouter.route('/:id')
.get(getoneTours)

const Router = require('express')
const router = new Router()
const DeviceController = require('../controllers/deviceController.js')

router.post('/', DeviceController.create)
router.post('/update', DeviceController.update)
router.post('/delete', DeviceController.delete)
router.post('/recommended', DeviceController.getRecommended)
router.get('/bestsellers', DeviceController.getBestsellers)
router.get('/mostviewed', DeviceController.getMostViewed)
router.get('/mostdiscounted', DeviceController.getDiscounted)
router.get('/match', DeviceController.getByMatch)
router.get('/', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)


module.exports = router
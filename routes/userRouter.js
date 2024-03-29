const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/registration', UserController.registration)
router.post('/update', UserController.update)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.get('/', UserController.getAll)

module.exports = router
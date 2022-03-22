const express = require('express')
const { authenticate } = require('@feathersjs/express')

const allowAnonymous = require('./middleware/allowAnonymous')
const setSessionAuthentication = require('./middleware/setSessionAuthentication')

const debugController = require('./controllers/debugController')

const router = express.Router()

router.get('/debug', setSessionAuthentication(), allowAnonymous(), authenticate('jwt', 'anonymous'), debugController.show)
router.get('/debug_protected', setSessionAuthentication(), authenticate('jwt'), debugController.show)

module.exports = router

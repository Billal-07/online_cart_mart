const router = require('express').Router()

const {
    adSign_up,
    login_user
} = require('./admins.controller')

router.post('/signUp', adSign_up)
router.get('/login', login_user)

module.exports = router
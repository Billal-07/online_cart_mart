const router = require('express').Router()

const {
    create_user,
} = require('./user.controller')


router.post('/signUp', create_user)
module.exports = router
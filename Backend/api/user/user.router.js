const router = require('express').Router()

const {
    create_user,
    get_user,
    user_by_Id,
    userLogin
} = require('./user.controller')

router.get('/getUsers', get_user)
router.get('/allUser/:id', user_by_Id)
router.post('/userLogin', userLogin)
router.post('/signUp', create_user)
module.exports = router
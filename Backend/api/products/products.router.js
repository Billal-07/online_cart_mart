const router = require('express').Router()

const {
    add_product
} = require('./products.controller')

router.post('/add', add_product)

module.exports = router
const express = require('express')
const app = express()
const port = 5000

const userRouter = require('./api/user/user.router')
const adminRouter = require('./api/admins/admins.router')
const productRouter = require('./api/products/products.router')

app.use(express.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept, Authorization')
  res.header('Access-Control-Allow-Crendentials', 'true')
  next()
})

app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/product', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
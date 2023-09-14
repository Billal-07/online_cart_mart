const { add_product } = require('./products.service')

module.exports = {
    add_product: (req, res) => {
        const body = req.body
        add_product(body, (err, result) => {
            if (err) return res.status(500).json({ success: 0, message: 'Database connection Error' })
            if (!result) return res.status(200).json({ success: 1, message: 'Database Empty' })
            return res.status(200).json({ success: 1, data: result })
        })
    }
}

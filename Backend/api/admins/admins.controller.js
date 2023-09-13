const { adSign_up, login_user } = require('./admins.service')

module.exports = {
    adSign_up: (req, res) => {
        const body = req.body

        adSign_up(body, (err, result) => {
            if (err) return res.status(500).json({ success: 0, message: 'Database Connection Error' })
            else return res.status(200).json({ success: 1, data: result })
        })
    },
    login_user: (req, res) => {
        const body = req.body

        login_user(body, (err, result) => {
            if (err) return res.status(500).json({ success: 0, message: 'Database Connection Error' })
            if (!result) return res.status(200).json({ success: 1, message: 'Database Empty' })
            return res.status(200).json({ success: 1, data: result })
        })
    }
}
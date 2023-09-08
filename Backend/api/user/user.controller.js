const {create_user, get_user} = require('./user.service')

module.exports = {
    create_user: (req, res) => {
        const body = req.body

        create_user(body, (err, result) => {
            if(err){
                console.log(err)
                return res.status(500).json({
                    success : 0,
                    message: "Database Connection Error"
                })
            }
            return res.status(200).json({
                success : 1,
                data : result
            })
        })
    },

    get_user: (req) => {
        get_user((err, result) => {
            if(err){
                console.log(err)
              return res.status(500).json({success : 0 , message : 'connection error'})
            }
            if(!result){
               return res.status(200).json({success : 1 , message : 'no users'})
            }
            return res.status(200).json({success : 1 , message})
        })
    }
}
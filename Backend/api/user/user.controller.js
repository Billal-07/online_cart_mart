const {create_user, get_user, user_by_Id, userLogin} = require('./user.service')

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

    get_user: (req, res) => {
        get_user((err, result) => {
            if(err){
                console.log(err)
              return res.status(500).json({success : 0, message : 'Database Connection Error'})
            }
            if(!result){
               return res.status(200).json({success : 1, message : 'There is Currently No Users In Database'})
            }
            return res.status(200).json({success : 1, data : result})
        })
    },

    user_by_Id : (req, res) => {
        const id = req.params.id

        user_by_Id(id, (err, result) => {
            if(err) {
                return res.status(500).json({success : 0, message : 'Database Connection Error'})
            }
            if(!result) {
                return res.status(200).json({success : 1, message : 'User Doesnt Exist'})
            }
            return res.status(200).json({success : 1, data : result})
        }) 
    },

    userLogin: (req, res) => {
        const body = req.body

        userLogin(body, (err, result) => {
            if(err){
                return res.status(500).json({success : 0, message : 'Database Connection Error'})
            }
            if(!result){
                return res.status(200).json({success : 1, message : 'Invalid Credentials'})
            }
            return res.status(200).json({success : 1, data : result})
        })
    }
}
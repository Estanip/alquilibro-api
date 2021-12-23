const { Book, User } = require('../../database/database');

const getUserBooks = async (req, res) => {

    try {

        const user = await User.findOne({
            where: {
                username: "Roman"
            }
        })
        
        const userBooks = await Book.findAll({
            where: {
                'userId': user.id
            }
        })

        return res.json({
            Message: `Libros subidos por el usuario ${user.username}: `,
            userBooks
        })

    } catch (err) {
        console.log(err.message)
    }

}

module.exports = {getUserBooks};
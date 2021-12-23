const axios = require('axios');
const { Book, User } = require('../../database/database');

const getBookByIsbn = async (req, res) => {

    try {

        const { isbn } = req.params;
        let book = {};

        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);

        if (response.data.totalItems === 0) {
            book = {
                title: "Libro Inexistente",
                author: "No Informado",
                editorial: "No Informado",
                category: "No Informado",
                language: "No Informado"
            }
        } else {
            const bookResult = response.data.items[0].volumeInfo;

            let lang;

            if (bookResult.language === "en") {
                lang = "English"
            }
            else if (bookResult.language === "es") {
                lang = "Español"
            }
            else {
                lang = "No Informado"
            }

            book = {
                title: bookResult.title,
                author: bookResult.authors ? bookResult.authors[0] : "No Informado",
                editorial: bookResult.publisher ? bookResult.publisher : "No Informado",
                category: bookResult.categories ? bookResult.categories[0] : "No Informado",
                language: lang ? lang : "No Informado"
            }
        }


        return res.json(book);


    } catch (err) {
        return res.json({
            Error: err.message
        })
    }
};

const uploadBook = async (req, res) => {

    try {

        const { isbn, title, author, editorial, category, language, price, rating } = req.body;

        const book = {
            isbn,
            title,
            author,
            editorial,
            category,
            language,
            price,
            rating
        }

        const user = await User.findOne({
            where: {
                username: "Roman"
            }
        })

        const newBook = await Book.create({...book, userId: user.id});

        return res.json({
            Message: "Libro Creado con Exito",
            newBook
        })

    } catch (err) {
        console.log(err.message)
    }

}

module.exports = { getBookByIsbn, uploadBook };
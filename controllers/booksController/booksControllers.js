const axios = require('axios');

const getBookByIsbn = async (req, res) => {


    try {

        const { isbn } = req.params;
        let book = {};

        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);

        const bookResult = response.data.items[0].volumeInfo;

        book = {
            title: bookResult.title,
            author: bookResult.authors[0],
            editorial: bookResult.publisher,
            category: bookResult.categories[0],
            language: bookResult.language
        }

        return res.json(book);


    } catch (err) {
        return res.json({
            "Error": err.message
        })
    }
};



module.exports = { getBookByIsbn };
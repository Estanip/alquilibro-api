const axios = require('axios');

const getBookByIsbn = async (req, res) => {


    try {

        const { isbn } = req.params;
        let book = {};

        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);

        const bookResult = response.data.items[0].volumeInfo;

        book = {
            title: bookResult.title,
            author: bookResult.authors ? bookResult.authors[0] : "No Informada",
            editorial: bookResult.publisher ?  bookResult.publisher : "No Informada",
            category: bookResult.categories ? bookResult.categories[0] : "No Informada" ,
            language: bookResult.language ? bookResult.language : "No Informada"
        }

        return res.json(book);


    } catch (err) {
        return res.json({
            Error: err.message
        })
    }
};



module.exports = { getBookByIsbn };
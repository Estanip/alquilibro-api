const axios = require('axios');

const getBookByIsbn = async (req, res) => {


    try {

        const { isbn } = req.params;
        let book = {};

        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);

        const bookResult = response.data.items[0].volumeInfo;

        let lang;
        
        if(bookResult.language === "en") {
            lang = "English"
        }
        else if(bookResult.language === "es") {
            lang = "Español"
        }
        else {
            lang = "No Informado"
        }

        console.log(lang)

        book = {
            title: bookResult.title,
            author: bookResult.authors ? bookResult.authors[0] : "No Informado",
            editorial: bookResult.publisher ?  bookResult.publisher : "No Informado",
            category: bookResult.categories ? bookResult.categories[0] : "No Informado" ,
            language: lang ? lang : "No Informado"
        }

        return res.json(book);


    } catch (err) {
        return res.json({
            Error: err.message
        })
    }
};



module.exports = { getBookByIsbn };
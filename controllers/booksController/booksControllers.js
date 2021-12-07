const axios = require('axios');

const getBookByIsbn = async (req, res) => {


    try {

        const { isbn } = req.params;

        console.log(isbn)

        const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);

        console.log("result", result.data)

        return res.json(result.data);


    } catch (err) {
        return res.json({
            "Error": err
        })
    }
};

module.exports = { getBookByIsbn };
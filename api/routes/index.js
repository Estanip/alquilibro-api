const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    console.log("Hola Mundo")
    return res.json({
        message: "Hola"
    })
})

module.exports = router;
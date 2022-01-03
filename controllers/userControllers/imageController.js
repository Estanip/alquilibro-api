const cloudinary = require("../../helpers/cloudinary");
const fs = require('fs');

const uploadImage = async (req, res) => {

    try {

        const path = req.files.image.path;

        // guarda image en cloud
        let newPath = await cloudinary.uploads(path, 'Image')

        // Borra image del server
        fs.unlinkSync(path)

        return res.json({
            message: 'Image Upload Succesfully',
            data: newPath
        })

    } catch (err) {
        console.log(err.message)
    }
};

module.exports = { uploadImage };
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb({ message: 'Formato no aceptado' }, false)
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 },    
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
      },
    fileFilter: fileFilter
});

module.exports = upload;
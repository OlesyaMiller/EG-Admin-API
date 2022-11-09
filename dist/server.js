const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/olesya/Development/Rodgers-Almer/eg_SFCC_BE_ADMIN/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });
app.post('/single', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('Single file upload success');
});
app.listen(3000);
//# sourceMappingURL=server.js.map
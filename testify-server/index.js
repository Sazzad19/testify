const express = require('express');
const cors = require("cors");
const fileupload = require("express-fileupload");

const port= process.env.PORT || 5000;
require("dotenv")
  .config();

const app = express();
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     safeFileNames: true,
//     preserveExtension: true,
//     tempFileDir: `${__dirname}/public/files/temp`
//   })
// );
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/files/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix+ '-' +file.originalname)
  },
})
const upload = multer({ storage: storage })
app.post('/upload', upload.single('file'), function (req, res) {
  res.send({success: true, result: req.file.filename})
})
app.get('/download/:fileName', function(req, res){
  console.log("filaname", req.params.fileName);
  const file = `${__dirname}\\public\\files\\${req.params.fileName}`;
  console.log("path",file);
  res.download(file); // Set disposition and send it.
});
const routes = require('./routes/index');



app.get('/', (req, res) => {
  res.send('Successful response.');
});
app.use('/api', routes);
app.listen(port, ()=> console.log(` server port ${port}`));
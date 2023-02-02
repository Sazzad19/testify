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
const routes = require('./routes/index');



app.get('/', (req, res) => {
  res.send('Successful response.');
});
app.use('/api', routes);
app.listen(port, ()=> console.log(` server port ${port}`));
const express = require('express');
const cors = require("cors");
const port= process.env.PORT || 5000;
require("dotenv")
  .config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require('./routes/index');



app.get('/', (req, res) => {
  res.send('Successful response.');
});
app.use('/api', routes);
app.listen(port, ()=> console.log(`book bazar server port ${port}`));
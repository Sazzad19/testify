const express = require('express');
const cors = require("cors");
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
app.listen(3000, () => console.log('Example app is listening on port 3000.'));
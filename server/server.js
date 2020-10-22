const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const protestRoute = require("./routes/router");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/", protestRoute);


app.listen('8080', () => console.log('started on port 8080'));
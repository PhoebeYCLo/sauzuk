const express = require('express');
const app = express();
const cors = require('cors');
const protestRoute = require("./routes/router");
const mapRoute = require("./routes/mapRouter");
const statusRoute = require("./routes/statusRouter");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/protest", protestRoute);
app.use("/map", mapRoute);
app.use("/status", statusRoute);


app.listen('8080', () => console.log('started on port 8080'));
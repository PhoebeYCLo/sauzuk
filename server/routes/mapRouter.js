const express = require('express');
const router = express.Router();
const Protest = require("../models/protest");
const Map = require("../models/map");

router
    .route("/")
    .get((req, res) => {
        // res.send("grgnwngw")
    Map
        .fetchAll()
        .then(maps => {
            console.log(maps);
            res.json({ maps });
        })
});

module.exports = router;
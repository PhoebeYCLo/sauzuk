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
            // console.log(maps);
            res.json({ maps });
        })
});

router
    .route("/:mapId")
    .get((req, res) => {
    Map.where(req.params)
        .fetchAll()
        .then(maps => {
            // res.send({ protests });
            res.send({ maps });
        })
});

module.exports = router;
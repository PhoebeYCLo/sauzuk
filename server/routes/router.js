const express = require('express');
const router = express.Router();
const Protest = require("../models/protest");
const Map = require("../models/map");

router.get("/", (req, res) => 
    Protest
        .fetchAll()
        .then(protests => {
            // res.send({ protests });
            res.json({ protests });
        })
);

router.get("/:id", (req, res) => {
    Protest.where(req.params)
        .fetchAll()
        .then(protests => {
            // res.send({ protests });
            res.json({ protests });
        })
});


module.exports = router;
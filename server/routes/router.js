const express = require('express');
const router = express.Router();
const Protest = require("../models/protest");

router.get("/", (req, res) => 
    Protest
        .fetchAll()
        .then(protests => {
            res.send({ protests });
        })
);

router.get("/:id", (req, res) => {
    Protest.where(req.params)
        .fetchAll()
        .then(protests => {
            res.send({ protests });
        })
});


module.exports = router;
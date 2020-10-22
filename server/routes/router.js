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


module.exports = router;
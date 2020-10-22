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
    // .get((req, res) => {
    //     Protest
    //         .fetchAll()
    //         .then(protests =>{
    //             res.status(200).json({ protests });
    //         });


module.exports = router;
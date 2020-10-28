const express = require('express');
const router = express.Router();
const Protest = require("../models/protest");
const Map = require("../models/map");
const Status = require("../models/status");

// router.get("/", (req, res) => {
//     Status.where(req.query)
//         .fetchAll({ withRelated: ["map"] })
//         .then(statuses => {
//             res.json({ statuses });
//         })
// });

// router.post("/", (req, res) => {
//     Map.where("mapId", req.body.mapId)
//         .fetch()
//         .then(map => console.log("Map found"))
//     new Status({
//         statusLat: req.body.statusLat,
//         statusLng: req.body.statusLng,
//         status: req.body.status,
//         statusTime: req.body.statusTime,
//         statusMessage: req.body.statusMessage
//     })
//         .save()
//         .then(newStatus => {
//             res.json({ newStatus });
//         })
// });

router
    .route("/")
    .get((req, res) => {
        Status
            .fetchAll()
            .then(statuses => {
                res.json({ statuses });
            })
    })

    .post((req, res) => {
        new Status({
            statusLat: req.body.statusLat,
            statusLng: req.body.statusLng,
            status: req.body.status,
            statusTime: req.body.statusTime,
            statusMessage: req.body.statusMessage
        })
            .save()
            .then(newStatus => {
                res.json({ newStatus });
            });
    });

    // .post((req, res) => {
    //     Map.where("mapId", req.body.mapId)
    //         .fetch()
    //         .then(map => console.log("Map found"))
    //         .catch(map => {
    //             res.json({ error: "Please provide valid map id"})
    //         });
    //     new Status({
    //         statusLat: req.body.statusLat,
    //         statusLng: req.body.statusLng,
    //         status: req.body.status,
    //         statusTime: req.body.statusTime,
    //         statusMessage: req.body.statusMessage
    //     })
    //         .save()
    //         .then(newStatus => {
    //             res.json({ newStatus });
    //         });
    // });

// router
//     .route("/" + mapId)
//     .get((req, res) => {
//         Status.where(req.params)
//             .fetch({ withRelated: ["map"] })
//             .then(statuses => {
//                 res.json({ statuses })
//             })
//     })

module.exports = router;
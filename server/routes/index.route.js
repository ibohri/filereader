const express = require("express");
const router = express.Router();


router.post("/uploadFile", (req, res) => {
    console.log(req.file);
})

module.exports = router;
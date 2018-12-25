const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");
const constants = require("../constants");
const XLSX = require("xlsx");
router.post("/uploadFile", upload.single("file"), async (req, res, next) => {
  try {
    console.log(req.file);
    const rows = await processFile(req.file.path);
    res.send(rows);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

async function processFile(path) {
  const workbook = XLSX.readFile(path);
  const sheet_name_list = workbook.SheetNames;
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
}

module.exports = router;

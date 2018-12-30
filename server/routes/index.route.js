const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");
const constants = require("../constants");
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const emailsettings = require("../config/email.settings");
const emailController = require("../controller/email.controller");
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

router.post("/updatesettings", async (req, res, next) => {
  try {
    const body = req.body;
    emailsettings.updateSettings(body);
    res.send(true);
  } catch (e) {
    console.log(e);
    next();
  }
});

router.post("/sendMail", async (req, res) => {
  const senderData = req.body;
  if (senderData && senderData.length) {
    senderData.forEach(element => {
      emailController.sendMail(element.to, element.body);
    });
  }
});

router.get("/emailsettings", async (req, res) => {
  res.send(emailsettings.getSettings());
});

async function processFile(path) {
  const workbook = XLSX.readFile(path);
  const sheet_name_list = workbook.SheetNames;
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
}

module.exports = router;

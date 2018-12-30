const path = require("path");
const fs = require("fs");
const filePath = path.resolve("./email-settings.json");
module.exports = {
  getSettings: getSettings,
  updateSettings: settings => {
    let savedSettings = getSettings();
    let mergedSettings = { ...savedSettings, ...settings };
    let settingsToUpdate = {
      from: mergedSettings.from,
      subject: mergedSettings.subject,
      body: mergedSettings.body,
      password: mergedSettings.password,
      emailField: mergedSettings.emailField
    };
    fs.writeFileSync(filePath, JSON.stringify(settingsToUpdate));
  }
};

function getSettings() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

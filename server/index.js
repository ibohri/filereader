const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./config/route-registry");
const distDir = '../dist';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, distDir)));

app.use(/^((?!(api)).)*/, (req, res) => {
    res.sendFile(path.join(__dirname, `${distDir}/index.html`));
});

// register the routes
app.use("/api", routes);

app.listen(4040, () => console.log("Express listening on port 4040"));
module.exports = app;
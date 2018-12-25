const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./routes/route-registry");
const distDir = "../dist";
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, distDir)));

app.use(/^((?!(api)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname, `${distDir}/index.html`));
});

// register the routes
app.use("/api", routes);
const port = process.env.PORT || 4040;
app.listen(port, () => console.log("Express listening on port " + port));
module.exports = app;

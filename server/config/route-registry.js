const indexRoute = require("../routes/index.route");
const express = require("express");
const router = express.Router();

const routes = [{
    path: "/",
    router: indexRoute
}];

routes.forEach(route => {
    router.use(route.path, route.router);
})

module.exports = router;
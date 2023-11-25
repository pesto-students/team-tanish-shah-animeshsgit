module.exports = app => {
    const wealthController = require("../controllers/wealth.controller");
    const router = require("express").Router();

    router.get("/", wealthController.all);
    router.get("/:yea/:mon", wealthController.getFiltered);

    //Middleware to redirect request after certain path
    app.use("/wealth", router)
}
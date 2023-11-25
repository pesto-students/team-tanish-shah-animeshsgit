const wealthModel = require("../model/wealth.model");

exports.all = (req, res) => {
    wealthModel.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        else res.send(data);
    })
}

exports.getFiltered = (req, res) => {
    if (req.params.mon == 0) {
        wealthModel.getByYear(req.params.yea, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            else res.send(data);
        })
    }
    else {
        wealthModel.getFiltered(req, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            else res.send(data);
        })
    }
}
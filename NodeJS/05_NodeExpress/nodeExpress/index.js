const express = require('express')
const db = require('./db/db.json')
const fs = require('fs')

const app = express();
// Middleware to parse JSON data in request body
app.use(express.json());

// Middleware to log the activity
const logger = (req, res, next) => {
    res.on("finish", function () {
        const timestamp = new Date().toISOString();
        const { method, url, ip } = req;
        const { statusCode, statusMessage } = res;
        console.log(`${timestamp}, having a method- ${method} at URL- ${url} with IP as-${ip} having a ${statusCode} status, ${statusMessage}`);
    });
    next();
};
app.use(logger);

app.get("/tasks", (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            res.status(200).send("Error reading the file")
        }
        if (data == "" || data == null) {
            res.status(200).json("No tasks right now!")
        }
        res.status(200).json(JSON.parse(data))
    })
});

app.get("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        }
        data = JSON.parse(data)
        const result = data.find(data => data.id == id)
        if (result) {
            res.status(200).send(result)
        }
        else {
            res.status(404).json({ "error": "No data for this ID" })
        }
    })
})

app.post("/tasks", (req, res) => {
    const newTask = req.body;
    const newId = db.length + 1;
    newTask.id = newId;
    db.push(newTask);
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.status(201).json(db)
})

app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let readObj = {};
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            throw err;
        }
        data = JSON.parse(data)
        const result = data.find(data => data.id == id)
        if (result) {
            for (let i of Object.keys(req.body)) {
                result[i] = req.body[i]
            }

            const postDel = db.filter((task) => {
                return task.id !== id;
            })

            postDel.push(result);
            fs.writeFileSync('./db/db.json', JSON.stringify(postDel))
            res.status(201).json(result)
        }
        else {
            res.status(404).json({ "error": "No data for this ID" })
        }
    })
})

app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const postDel = db.filter((task) => {
        return task.id !== id;
    })
    fs.writeFileSync('./db/db.json', JSON.stringify(postDel))
    res.status(200).json(postDel)
})

app.use((req, res, next) => {
    res.status(404)
    res.json({ error: 'Not found' });
})

const port = 3000;
app.listen(port, () => {
    console.log("Server listening to port: ", port);
})
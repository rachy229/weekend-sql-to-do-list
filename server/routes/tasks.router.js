const express = require('express')
const router = express.Router();
const pool = require('../modules/pool');

// let tasks = [
//     {name: 'Serenade my cats'},
//     {name: 'Organize my hats'},
//     {name: 'Contemplate existence'}
// ];

router.get('/', (req, res) => {
    // res.send(songs);
    let queryText = 'SELECT * FROM "tasks";';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR in GET query', error);
            res.sendStatus(500);
        })
});

router.post('/', (req, res) => {
    // songs.push(req.body);
    // res.sendStatus(200);
    const newTask = req.body;
    const queryText = `
        INSERT INTO "tasks" ("name")
        VALUES ($1);
    `;
    pool.query(queryText, [newTask.name])
    .then( (result) => {
        res.sendStatus(201);
    })
    .catch( (error) => {
        console.log('ERROR POSTing to database', error);
        res.sendStatus(500);
    })
});

router.put('/status/:id', (req,res) => {
    let taskId = req.params.id;
    let status = req.body.status;
})

module.exports = router;
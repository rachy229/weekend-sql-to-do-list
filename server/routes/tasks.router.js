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
    let queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
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
    let queryText;
    
    if(status === 'true') {
        console.log('in router.put: true')
        queryText = `UPDATE "tasks" SET "status" = false WHERE id = $1;`;
    } else if (status === 'false') {
        console.log('in router.put: false')
        queryText = `UPDATE "tasks" SET "status" = true WHERE id = $1;`;
    } else {
        res.sendStatus(500);
        return;
    }

    pool.query(queryText, [taskId])
    .then((dbResponse) => {
        res.send(dbResponse.rows);
    }).catch((error) => {
        console.log(`ERROR updating with query ${queryText}: ${error}`);
        res.sendStatus(500);
    })
})

module.exports = router;
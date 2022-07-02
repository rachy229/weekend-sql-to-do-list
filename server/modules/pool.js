const pg = require('pg');

const Pool = pg.Pool;


//created a new pool instance to manage out connections
const pool = new Pool({
    database: 'task_list',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});


pool.on('connect', () => {
    console.log('Postgres connected!!');
});

pool.on('error', (error) => {
    console.log('Error with Postgres pool', error);
})


module.exports = pool;
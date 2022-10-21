import mysql from 'mysql2';
import util from 'util';
const db = mysql.createConnection({
    host: "localhost",
    user: "shadin",
    password: "password",
    database: "TEAMS_DB"
  });

db.query = util.promisify(db.query)

db.connect(function(err) {
    if (err) {
        throw err
    } else {
    };
});

export default db
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5500;

app.use(express.json());

let db = new sqlite3.Database('data.db');

app.get('/api/users', (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erreur interne du serveur');
        } else {
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
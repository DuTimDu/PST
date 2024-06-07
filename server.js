const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database(':memory:');

// Charger les commandes SQL du fichier data.sql
const fs = require('fs');
const sql = fs.readFileSync('data.sql').toString();

// Initialiser la base de données
db.serialize(() => {
    db.exec(sql, (err) => {
        if (err) {
            console.error('Erreur lors de l\'initialisation de la base de données:', err);
        } else {
            console.log('Base de données initialisée avec succès.');
        }
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Route pour vérifier les identifiants
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            res.status(500).send('Erreur du serveur');
        } else if (row) {
            res.send({ success: true, username: row.username });
        } else {
            res.send({ success: false });
        }
    });
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
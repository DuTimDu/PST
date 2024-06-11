const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Configurer le middleware pour parser le corps des requêtes POST
app.use(bodyParser.urlencoded({ extended: true }));

// Servir les fichiers statiques (index.html et home.html)
app.use(express.static(path.join(__dirname, 'public')));

// Ouvrir la base de données SQLite
let db = new sqlite3.Database('data.db');

// Route pour gérer l'authentification
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Erreur interne du serveur');
        } else if (row) {
            res.redirect('/home.html'); // Rediriger vers home.html si les identifiants sont corrects
        } else {
            res.status(401).send('Identifiants incorrects'); // Envoyer une réponse d'erreur si les identifiants sont incorrects
        }
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

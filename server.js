const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3306;

// Configuration de Body Parser pour analyser les données de la requête
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Déclaration d'une instance de base de données SQLite
const db = new sqlite3.Database(':memory:');

// Création de la table des utilisateurs (nom, mot de passe)
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)");
});

// Route pour gérer les requêtes de connexion
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Vérification si l'utilisateur existe dans la base de données
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            res.status(500).send('Erreur du serveur');
        } else if (row) {
            res.send({ success: true, message: 'Connexion réussie' });
        } else {
            res.send({ success: false, message: 'Identifiants incorrects' });
        }
    });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

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
let db1 = new sqlite3.Database('database.db');

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

// Route pour enregistrer les sélections dans la base de données
app.post('/saveSelections', (req, res) => {

    const { userId, projectId, hour, selected } = req.body;
    const selections = req.body.selections;
    // Connexion à la base de données

    // Insertion de la sélection dans la base de données
    db.serialize(() => {
        db1.run('DELETE FROM selections');
        const stmt = db1.prepare('INSERT INTO selections (userId, projectId, hour, selected) VALUES (?, ?, ?, ?)');
        selections.forEach(selection => {
            stmt.run(selection);
        });
        stmt.finalize();
    });
    
    // Ferme la connexion à la base de données

    res.redirect('/'); // Redirige vers la page d'accueil
});

app.get('/data', (req, res) => {
  
    db1.all('SELECT * FROM selections', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ data: rows });
    });
});
// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

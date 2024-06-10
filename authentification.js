const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('data.db');

db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");

    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['jury1', 'conseil']);
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['jury2', 'remises']);
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['jury3', 'reunion']);
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['jury4', 'jury']);
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['jury5', 'bureau']);
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['jury6', 'bateau']);
    db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['jury7', 'stand']);
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Base de données SQLite fermée');
});

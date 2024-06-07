-- Créer la table des utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Insérer des utilisateurs
INSERT INTO users (username, password) VALUES ('jury1', 'conseil');
INSERT INTO users (username, password) VALUES ('jury2', 'remise');
INSERT INTO users (username, password) VALUES ('jury3', 'service');
INSERT INTO users (username, password) VALUES ('jury4', 'stand');
INSERT INTO users (username, password) VALUES ('jury5', 'server');
INSERT INTO users (username, password) VALUES ('jury6', 'bateau');
INSERT INTO users (username, password) VALUES ('jury7', 'disque');
INSERT INTO users (username, password) VALUES ('jury8', 'association');
INSERT INTO users (username, password) VALUES ('jury9', 'tableau');
INSERT INTO users (username, password) VALUES ('jury10', 'chaise');
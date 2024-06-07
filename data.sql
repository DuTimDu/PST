-- Créer la table des utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Insérer des utilisateurs
INSERT INTO users (username, password) VALUES ('mathieu', 'zozo');
INSERT INTO users (username, password) VALUES ('alice', 'password1');
INSERT INTO users (username, password) VALUES ('bob', 'password2');
INSERT INTO users (username, password) VALUES ('bob', 'password2');
INSERT INTO users (username, password) VALUES ('bob', 'password2');
INSERT INTO users (username, password) VALUES ('bob', 'password2');
INSERT INTO users (username, password) VALUES ('bob', 'password2');
INSERT INTO users (username, password) VALUES ('bob', 'password2');
-- Créer la table des utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Insérer des utilisateurs
INSERT INTO users (username, password) VALUES ('jury1', 'e9m79NnR');
INSERT INTO users (username, password) VALUES ('jury2', 'z0J4iTa9');
INSERT INTO users (username, password) VALUES ('jury3', 'tpM77u7V');
INSERT INTO users (username, password) VALUES ('jury4', 'g6lX4J2v');
INSERT INTO users (username, password) VALUES ('jury5', '8Bpu0Z9u');
INSERT INTO users (username, password) VALUES ('jury6', 'qM615iVt');
INSERT INTO users (username, password) VALUES ('jury7', 'H08mnnS4');
INSERT INTO users (username, password) VALUES ('jury8', '29c4iRmC');
INSERT INTO users (username, password) VALUES ('jury9', 'Deo7R41c');
INSERT INTO users (username, password) VALUES ('jury10', 'Rn9Mbr58');
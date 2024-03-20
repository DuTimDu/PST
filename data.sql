CREATE DATABASE authentification;
USE authentification;

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_utilisateur VARCHAR(50) UNIQUE NOT NULL,
    mot_de_passe_hash VARCHAR(255) NOT NULL
);

INSERT INTO utilisateurs (nom_utilisateur, mot_de_passe_hash) VALUES ('nom_utilisateur', SHA2('mot_de_passe', 256));
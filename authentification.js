const sqlite3 = require('sqlite3').verbose();
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérification des identifiants via une requête fetch
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'home.html'; // Redirection vers la page d'accueil
        } else {
            document.getElementById('error-message').textContent = 'Identifiants incorrects';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = 'Une erreur est survenue. Veuillez réessayer.';
    });
});

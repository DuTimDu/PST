document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('username', data.username); // Stocke le nom d'utilisateur
            window.location.href = 'home.html'; // Redirection vers la page d'accueil
        } else {
            document.getElementById('error-message').textContent = 'Identifiants incorrects';
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        document.getElementById('error-message').textContent = 'Erreur du serveur';
    });
});

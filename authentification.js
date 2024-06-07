document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérification des identifiants
    if (username === 'mathieu' && password === 'zozo') {
        window.location.href = 'home.html'; // Redirection vers la page d'accueil
    } else {
        document.getElementById('error-message').textContent = 'Identifiants incorrects';
    }
});

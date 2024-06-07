document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = [
        { username: 'mathieu', password: 'zozo' },
        { username: 'alice', password: 'password1' },
        { username: 'bob', password: 'password2' }
    ];

    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        localStorage.setItem('username', username); // Stocke le nom d'utilisateur
        window.location.href = 'home.html'; // Redirection vers la page d'accueil
    } else {
        document.getElementById('error-message').textContent = 'Identifiants incorrects';
    }
});

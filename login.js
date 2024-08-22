document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic authentication (in real application, you should check with a server)
  if (username === 'bob' && password === 'bob') {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      window.location.href = 'home.html';
  } else {
      alert('Incorrect username or password');
  }
});



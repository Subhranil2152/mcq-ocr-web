

  document.getElementById('logoutBtn').addEventListener('click', () => {
    console.log('Logout button clicked'); // Check if this message appears in the console
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
});


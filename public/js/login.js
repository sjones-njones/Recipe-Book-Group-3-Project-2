$(document).ready(() => {
  $('.login-form').on('submit', async (event) => {
    event.preventDefault();

    const email = $('#email-login').val().trim();
    const password = $('#password-login').val().trim();

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  });

  $('.signup-form').on('submit', async (event) => {
    event.preventDefault();

    const name = $('#name-signup').val().trim(); // Add name here
    const email = $('#email-signup').val().trim();
    const password = $('#password-signup').val().trim();

    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }), // Include name in the request
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  });
});

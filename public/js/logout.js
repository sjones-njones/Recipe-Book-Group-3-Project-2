console.log('running');
$(document).ready(() => {
  $('#logout').on('click', async () => {
    console.log('clic');
    const response = await fetch('api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  });
});

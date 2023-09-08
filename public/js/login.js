const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      const modals = document.getElementById('modals')
      const modal = document.getElementById('login-error')
      modals.classList.remove('hidden')
      setTimeout(() => {
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-100')
      }, 100)
      setTimeout(() => {
        modal.classList.remove('opacity-100')
        modal.classList.add('opacity-0')
        setTimeout(() => {
          modals.classList.add('hidden')
        }, 100)
      }, 3000)
    }
  }
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


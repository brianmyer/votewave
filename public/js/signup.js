const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        const modals = document.getElementById('modals')
        const modal = document.getElementById('signup-error')
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
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
